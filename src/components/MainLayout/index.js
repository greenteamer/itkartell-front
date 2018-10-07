import React from 'react'

import Menu from '../Menu';


const layoutStyle = {
}

const Layout = ({ children }) => (
  <div className="layoutWrapper">
    <Menu transparent />
    <div className="childrenWrapper">
      {children}
    </div>
    <style jsx>{`
      .layoutWrapper {
        padding-top: 50px;
        background: white;
      }
      .childrenWrapper {
        margin-top: -50px;
      }
    `}</style>
  </div>
)

export default Layout

export const withLayout = (Component) => { 
  class Wrapper extends React.Component {
    render() {
      return (
        <Layout>
          <Component {...this.props} />
        </Layout>
      )
    }
  }
  Wrapper.getInitialProps = Component.getInitialProps
  return Wrapper
}
