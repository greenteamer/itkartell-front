import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'

import Container from '../Container'

class Menu extends React.Component { 
  state = {
    isScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ isScrolled: window.scrollY !== 0 })
  }

  render() {
    const { isScrolled } = this.state;
    const { dark } = this.props;

    return (
      <div className="wrapper">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <div className="logoWrapper">
                <div className="logo">IT Kartell</div>
              </div>
            </Grid>
            <Grid item xs={8}>
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
          </Grid>
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
          .wrapper {
            position: fixed;
            top: 0;
            width: 100%;
            background: ${isScrolled || dark ? 'black' : 'transparent'};
            z-index: 100;
          }
          ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
          }
          li {
            font-family: "Muller-ExtraBold";
            font-weight: 500;
            font-size: 16px;
            list-style: none;
            padding: 16px;
            margin: 0 4px;
            color: white;
            text-decoration: none;
            cursor: pointer;
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

export default Menu