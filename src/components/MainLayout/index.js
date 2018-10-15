import React from 'react'

import Menu from '../Menu';


const layoutStyle = {
}

const Layout = ({ children }) => (
  <div className="layoutWrapper">
    <Menu transparent />
    <div className="layoutChildrenWrapper">
      {children}
    </div>
    <style jsx global>{`
      @font-face {
        font-family: "Akrobat-Black";
        src: url("/static/fonts/akrobat/Akrobat-Black.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-Bold";
        src: url("/static/fonts/akrobat/Akrobat-Bold.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-SemiBold";
        src: url("/static/fonts/akrobat/Akrobat-SemiBold.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-ExtraBold";
        src: url("/static/fonts/akrobat/Akrobat-ExtraBold.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-ExtraLight";
        src: url("/static/fonts/akrobat/Akrobat-ExtraLight.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-Light";
        src: url("/static/fonts/akrobat/Akrobat-Light.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-Regular";
        src: url("/static/fonts/akrobat/Akrobat-Regular.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Akrobat-Thin";
        src: url("/static/fonts/akrobat/Akrobat-Thin.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Muller-ExtraBold";
        src: url("/static/fonts/muller_narrow/MullerNarrow-ExtraBold.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Muller-ExtraBoldItalic";
        src: url("/static/fonts/muller_narrow/MullerNarrow-ExtraBoldItalic.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Muller-Light";
        src: url("/static/fonts/muller_narrow/MullerNarrow-Light.otf");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "Muller-LightItalic";
        src: url("/static/fonts/muller_narrow/MullerNarrow-LightItalic.otf");
        font-weight: normal;
        font-style: normal;
      }
      .layoutWrapper {
        padding-top: 50px;
        background: white;
        overflow: hidden;
      }
      .layoutChildrenWrapper {
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
