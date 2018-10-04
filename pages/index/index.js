/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Cookies from 'js-cookie';

import { withLayout } from '../../components/MainLayout'
import Header from './Header'
import StartToEnd from './StartToEnd'
import PageList from './PageList'


const styles = theme => ({
  root: {
    minHeight: 2000,
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleTest = async () => {
    console.log('>>> cookies: ', Cookies.get('csrftoken'))
    const res = await fetch('http://localhost:8000/graphql/', {
      method: "POST",
      credentials: "include",
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        "Accept": "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `{allPages{
          id
          name
          slug
          text
        }`
      })
    })
    // const data = await res.json()
    // const res = "test"
    console.log(`Show data fetched. Count: `, res)
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Header />
        <StartToEnd />
        <PageList />
        <Button color="primary" onClick={this.handleTest}>
          OK
        </Button>
        <style jsx>{`
          .headerContainer {
            background: #333;
          }
        `}</style>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(`Show data fetched. Count: ${data.length}`)
//   return {
//     shows: data,
//   }
// }

Index.getInitialProps = async function() {
  // const res = await fetch('http://localhost:8000/graphql/', {
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: `{allPages{
  //       id
  //       name
  //       slug
  //       text
  //     }`
  //   })
  // })
  // // const data = await res.json()
  // console.log(`Show data fetched. Count: `, res)
  return {
    shows: [],
  }
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

export default withRouter(withLayout(withStyles(styles)(Index)))
