import WithRouter from './app/routes/routes';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import styledTheme from './app/ui/themeStyled';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { mainTheme } from './app/ui/theme';
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={styledTheme}>
          <ConfigProvider theme={mainTheme}>
            <WithRouter />
          </ConfigProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
