import React from 'react'
import Grid from '@material-ui/core/Grid'
import Slider from "react-slick"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeRounded from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRounded from '@material-ui/icons/NavigateNextRounded';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { map, addIndex } from 'ramda';

import "slick-carousel/slick/slick.css"; 

import Container from '../../src/components/Container'
import TitleBlock from '../../src/components/TitleBlock'
import { API_PORT, API_URL } from '../../config'


const indexedMap = addIndex(map);

export const allProjectsQuery = gql`
  query {
    projects {
      name
      cover {
        url
      }
    }
  }
`

const PrevButton = ({ className, style, onClick }) => (
  <div style={{
    position: 'absolute',
    top: '43%',
    left: '-50px',
  }}>
    <IconButton
      onClick={onClick}
      style={{
      }}
    >
      <NavigateBeforeRounded />
    </IconButton>
  </div>
)

const NextButton = ({ className, style, onClick }) => (
  <div style={{
    position: 'absolute',
    top: '43%',
    right: '-50px',
  }}>
    <IconButton onClick={onClick}>
      <NavigateNextRounded />
    </IconButton>
  </div>
)

export default function RecentWorks () { 
  return (
    <Query query={allProjectsQuery}>
      {(props) => {
        const  { loading, error, data } = props;
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: <PrevButton />,
          nextArrow: <NextButton />,
        };
        return (
          <div className="recentWorks">
            <Container>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  {/* <div className="centered">
                    <h3>Наши работы</h3>
                  </div> */}
                  <TitleBlock preText={<span>portfolio</span>} text="Наши работы" tag="h3" centered />
                  <div className="sliderContainer">
                    <Slider {...settings}>
                      {data.projects && indexedMap((item, index) => (
                        <div key={index} className="sliderItem">
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              backgroundImage: `url(${API_URL}:${API_PORT}${item.cover.url})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            className="item"
                          ></div>
                        </div>
                      ), data.projects)}
                    </Slider>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <style jsx>{`
              .recentWorks {
                margin-top: 70px;
                padding: 50px 0;
              }
              .centered {
                display: flex;
                justify-content: center;
              }
              .sliderContainer {
                position: relative;
                padding: 0 50px;
              }
              .sliderContainer:before {
                position: absolute;
                left: -60px;
                top: -120px;
                height: 490px;
                width: 290px;
                content: "";
                background-image: url(static/dots.png);
              }
              .sliderItem {
                height: 280px;
                padding: 16px;
              }
              .sliderItem:focus {
                outline-width: 0px;
              }
              .item {
                border-radius: 4px;
                box-shadow: 0px 1px 30px 2px rgba(0, 0, 0, 0.1);
              }
            `}</style>
          </div>
        )
      }}
    </Query>
  )
}
