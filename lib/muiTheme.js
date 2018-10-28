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
      // containedPrimary: {
      //   color: 'white',
      //   background: 'linear-gradient(320deg, #64b8f6 0, #2f80ed 100%)',
      // },
      // containedSecondary: {
      //   color: 'white',
      //   background: 'linear-gradient(320deg,#3edc78 0,#2fc867 100%)',
      //   backgroundColor: '#3edc78',
      // },
      outlinedPrimary: {
        '&:hover': {
          border: '1px solid rgba(251, 67, 46, 0.5)',
        },
        color: '#ff4b3f',
        border: '1px solid rgba(251, 67, 46, 0.5)',
      },
      containedPrimary: {
        color: 'white',
        background: 'linear-gradient(320deg, #f44438 0, #ff4b3f 100%)',
        backgroundColor: '#f44438',
      },
      containedSecondary: {
        color: 'white',
        background: 'linear-gradient(320deg, #5366cf 0, #6c7ede 100%)',
        backgroundColor: '#5366cf',
      },
      sizeSmall: {
        fontSize: '0.7rem',
        padding: '7px 15px',
      },
      textPrimary: {
        '&:hover': {
          backgroundColor: 'rgba(251, 67, 46, 0.08)',
        }
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 1px 30px 2px rgba(0, 0, 0, 0.1)',
      }
    }
  },
});
