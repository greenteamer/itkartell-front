/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import { withLayout } from '../../src/components/MainLayout'
import Header from './Header'
import StartToEnd from './StartToEnd'
import PageList from './PageList'


const styles = theme => ({
  root: {
    minHeight: 2000,
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

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    console.log('>>> index props: ', { props: this.props })

    return (
      <div className={classes.root}>
        <Header />
        <StartToEnd />
        <PageList />
        <Button color="primary" onClick={this.handleClick}>
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

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  return {
    shows: data,
  }
}

export default withRouter(withLayout(withStyles(styles)(Index)))
