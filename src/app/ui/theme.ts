import { createTheme, TypeBackground } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    background: TypeBackground;
  }
}
export const themeMain = createTheme({
  palette: {
    primary: {
      main: '#4569B1',
    },
    secondary:{
      main: '#DD2727'
    },
    background: {
      default: '#ffffff',
      paper: '#E9EFF3',
    },
    info: {
      main: '#ffffff',
      light: '#797979',
      contrastText: '#1D1C21',
      dark: '#0000000',
    },
  },
});
