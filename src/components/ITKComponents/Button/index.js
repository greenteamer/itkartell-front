import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = { 
  root: {
    border: "1px solid #333"
  },
}

const StyledButton = (props) => (
  <Button {...props} className={props.classes.root} />
)

export default withStyles(styles)(StyledButton)