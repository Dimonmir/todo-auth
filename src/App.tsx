import { ThemeProvider } from '@emotion/react';
import { themeMain } from './app/ui/theme';

import { RouterProvider } from 'react-router-dom';
import router from './app/routes/routes';


function App() {
  return (
    <ThemeProvider theme={themeMain}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
