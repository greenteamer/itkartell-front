import React from 'react'
import Link from 'next/link'

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
          <ul>
            {data.map(item => (
              <Link href={item.url} key={item.name}>
                <li>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </Container>
        <style jsx>{`
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
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Portfolio',
    url: '/portfolio',
  },
  {
    name: 'Pages',
    url: '/pages',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contacts',
    url: '/contact',
  },
]

export default Menu