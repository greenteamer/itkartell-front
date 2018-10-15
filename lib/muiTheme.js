import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink, green } from '@material-ui/core/colors';
// import purple from '@material-ui/core/colors/purple';

// A theme with custom primary and secondary color.
// It's optional.
export default createMuiTheme({
  palette: {
    // primary: {
    //   light: "#7986cb",
    //   main: "#64b8f6",
    //   dark: "#303f9f",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   light: "#ff4081",
    //   main: "#3edc78",
    //   dark: "#c51162",
    //   contrastText: "#fff",
    // }
    primary: blue,
    secondary: green,
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: 'black',
        borderRadius: '30px',
      },
      // contained: {
      //   boxShadow: '0px 1px 30px 2px rgba(0, 0, 0, 0.1)',
      // },
      containedPrimary: {
        color: 'white',
        background: 'linear-gradient(320deg, #64b8f6 0, #2f80ed 100%)',
      },
      containedSecondary: {
        color: 'white',
        background: 'linear-gradient(320deg,#3edc78 0,#2fc867 100%)',
        backgroundColor: '#3edc78',
      },
      sizeSmall: {
        fontSize: '0.7rem',
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 1px 30px 2px rgba(0, 0, 0, 0.1)',
      }
    }
  },
});
