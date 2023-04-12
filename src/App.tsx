import WithRouter from './app/routes/routes';
import { Provider } from 'react-redux';
import { store } from './app/store';
import styledTheme from './app/ui/themeStyled';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './app/ui/GlobalStyle';



function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <WithRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
