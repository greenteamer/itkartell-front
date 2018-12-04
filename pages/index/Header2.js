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
                  <p className="secondary">IT Kartell - это современная разработка доступная для любого бизнеса. Мы разрабатываем полезные и современные приложения для роста Вашего дела. Ресурсы созданные с IT Kartell будут лучшим ответом на запросы Ваших клиентов.</p>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img src="/static/header-image.png" className="headerImage" />
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
            padding: 150px 0 250px;
            z-index: 6;
          }
          .secondary {
            font-family: "Akrobat-SemiBold";
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
          .headerImage {
            position: absolute;
            width: 600px;
          }
        `}</style>
      </div>
    )
  }
}

export default Header