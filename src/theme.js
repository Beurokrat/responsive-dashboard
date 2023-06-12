import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
            m:1,
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
      MuiGrid2: {
        defaultProps: {
        ml: 0,
        width: '100%'
        }
      }
    },
    palette: {
    //   mode: 'dark',
      mode: 'light',
      // primary: {
      //   // main: orange[500]
      // }
      customRibRed: {
        main: red[400],
        superDark: red[800],
        superLight: red[100],
      },
    },
    typography: {
      myVariant: {
        fontSize: '2rem',
      },
    },
  });