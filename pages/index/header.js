import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'

import Container from '../../src/components/Container'
import Menu from '../../src/components/Menu'
import Typed from '../../src/components/Typed'


class Header extends React.Component { 

  render() {
    return (
      <div className="headerWrapper">
        <div className="bg">
          <img src="/static/bg-bottom.svg" alt="" />
        </div>
        <Container>
          <div className="headerContent">
            <Grid container>
              <Grid container item xs={6}>
                <Grid item xs={12}>
                  <Typed fontSize={35} />
                </Grid>
                <Grid item xs={12}>
                  <p className="secondary">We design and develop mobile apps that delight your users and grow your business. Enterprise-grade development combined with outstanding design.</p>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img src="/static/responsive.png" />
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .headerWrapper {
            position: relative;
          }
          .headerContent {
            position: relative;
            padding: 250px 0;
            z-index: 6;
          }
          .secondary {
            color: white;
            font-size: 16px;
            line-height: 28px;
          }
          .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(/static/header.jpg);
          }
          .bg img {
            position: absolute;
            width: 100%;
            height: auto;
            bottom: -1px;
            left: 0px;
            right: 0px;
            z-index: 5;
          }
          .bg::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.85;
            background-image: linear-gradient(45deg, #01aef0 0%, #c85eff 91%);
            z-index: 3;
          }
        `}</style>
      </div>
    )
  }
}

export default Header