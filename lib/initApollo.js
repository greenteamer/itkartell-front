import ApolloBoostClient, { ApolloClient, InMemoryCache } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  console.log('>>> env: ', { NODE_ENV: process.env.NODE_ENV })
  const uri = process.env.NODE_ENV === 'production'
    ? 'http://89.223.93.192:1337/graphql'
    : 'http://localhost:1337/graphql';
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri,
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
      // headers: {
      //   'X-CSRFToken': "cvXlOYYwM0S4ln72ffhPppaAF506t0jOLUTW6eUyqceGOvx5R4T0IHB72uaUNZuF",
      //   token: 'supersecret'
      // }
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

// function create (initialState) {
//   // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
//   return new ApolloBoostClient({
//     uri: 'http://localhost:8000/graphql', // Server URL (must be absolute)
//     fetchOptions: {
//       credentials: "include",
//     }
//   })
// }

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}