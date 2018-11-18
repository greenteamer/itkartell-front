import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

import Container from '../Container'

class Footer extends React.Component { 
  render() {
    return (
      <div className="wrapper">
        {/* <div className="bg">
          <img src="/static/bg-top.svg" alt="" />
        </div> */}
        <Container>
          <div className="contentWrapper">
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <ul>
                  {data.map(item => (
                    <Link href={item.url} key={item.name}>
                      <li>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={5}>
                <div className="footerRightBlockWrapper">
                  <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary</p>
                  <Button size="meduim" variant="contained" color="primary">Оставить заявку</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <style jsx>{`
          .logoWrapper {
            display: flex;
            align-items: center;
            height: 100%;
          }
          .logo {
            font-family: "Muller-ExtraBold";
            color: white;
            font-size: 22px;
          }
          p {
            font-family: "NotoSans-Regular";
            font-size: 13px;
            color: #3c4858;
          }
          .contentWrapper {
            padding: 50px 0;
            position: relative;
            z-index: 1000;
          }
          .wrapper {
            position: relative;
            margin-top: 70px;
            background: #F4F8FB;
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
          ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
          }
          li {
            font-family: "NotoSans-Regular";
            font-size: 13px;
            list-style: none;
            padding: 4px;
            color: #3c4858;
            text-decoration: none;
            cursor: pointer;
          }
          .footerRightBlockWrapper {

          }
        `}</style>
      </div>
    )
  }
}

const data = [
  {
    name: 'Главная',
    url: '/',
  },
  {
    name: 'О нас',
    url: '/about',
  },
  {
    name: 'Портфолио',
    url: '/portfolio',
  },
  {
    name: 'Страницы',
    url: '/pages',
  },
  {
    name: 'Блог',
    url: '/blog',
  },
  {
    name: 'Контакты',
    url: '/contact',
  },
]

export default Footer