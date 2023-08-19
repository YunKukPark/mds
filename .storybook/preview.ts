import type { Preview } from '@storybook/react';
import '../public/fonts/fonts.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { theme, darkTheme } from '../src/shared/theme';

const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Pretandard", sans-serif;
    }
  `;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      themes: {
        light: theme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }) as any,
  ],
};

export default preview;
