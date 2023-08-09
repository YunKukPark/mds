import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { styled } from 'styled-components';
import { flexBox } from '@shared/utils';
import App from '@src/App';

const S = {
  Container: styled.div`
    ${flexBox()}
  `,
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <S.Container>
      <Theme accentColor="mint" grayColor="sand" radius="large">
        <App />
      </Theme>
    </S.Container>
  </React.StrictMode>,
);
