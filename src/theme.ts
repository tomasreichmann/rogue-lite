import { createTheme } from '@mui/material/styles';
import { red, green, brown } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: green,
    secondary: brown,
    error: {
      main: red.A400,
    },
  },
});

export default theme;
