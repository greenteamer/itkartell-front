import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const allPagesQuery = gql`
  query {
    posts {
      name
      slug
      text
    }
  }
`
// export const allPostsQueryVars = {
//   skip: 0,
//   first: 10
// }

export default function PageList () {
  return (
    <Query query={allPagesQuery}>
    {/* <Query query={allPagesQuery} variables={allPostsQueryVars}> */}
      {(props) => {

        const { loading, error, data: { posts }, fetchMore } = props;
        // const error = null;
        // const loading = null;
        // const allPages = [];

        console.log('>>> Page list props: ', { props })

        if (error) return <div>Error loading posts.</div>
        if (loading) return <div>Loading</div>

        // const areMorePosts = allPosts.length < _allPostsMeta.count
        const areMorePosts = false;
        return (
          <section>
            <ul>
              {posts.map((post, index) => (
                <li key={post.slug}>
                  <div>
                    <span>{index + 1}. </span>
                    <a href="/">{post.name}</a>
                    {/* <PostUpvoter id={post.id} votes={post.votes} /> */}
                  </div>
                </li>
              ))}
            </ul>
            {/* {areMorePosts ? (
              <button onClick={() => loadMorePosts(allPosts, fetchMore)}>
                {' '}
                {loading ? 'Loading...' : 'Show More'}{' '}
              </button>
            ) : (
              ''
            )} */}
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
              button:before {
                align-self: center;
                border-style: solid;
                border-width: 6px 4px 0 4px;
                border-color: #ffffff transparent transparent transparent;
                content: '';
                height: 0;
                margin-right: 5px;
                width: 0;
              }
            `}</style>
          </section>
        )
      }}
    </Query>
  )
}

function loadMorePosts (allPosts, fetchMore) {
  fetchMore({
    variables: {
      skip: allPosts.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
      })
    }
  })
}