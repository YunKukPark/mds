import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, styled } from 'styled-components';
import { flexBox } from '@shared/utils';
import App from '@src/App';
import { theme } from './shared/theme';
import '@src/reset.css';

const S = {
  Container: styled.div`
    ${flexBox()}
  `,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <S.Container>
        <Theme accentColor="mint" grayColor="sand" radius="large">
          <App />
        </Theme>
      </S.Container>
    </ThemeProvider>
  </React.StrictMode>,
);
