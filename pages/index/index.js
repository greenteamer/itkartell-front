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
import RecentWorks from './RecentWorks'
import PageList from './PageList'
import Seo from './Seo'


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
    return (
      <div className={classes.root}>
        <Header />
        <StartToEnd />
        <RecentWorks />
        <Seo />
        <PageList />
        <Button color="primary" variant="contained" onClick={this.handleClick}>
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

export default withRouter(withLayout(withStyles(styles)(Index)))
