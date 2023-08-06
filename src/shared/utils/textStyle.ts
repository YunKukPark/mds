import { css } from 'styled-components';
import theme from '../theme';

const { fontSizes, lineHeights, letterSpacings } = theme;

export function textStyle(size: keyof typeof fontSizes) {
  return css`
    font-size: ${fontSizes[size]};
    line-height: ${lineHeights[size]};
    letter-spacing: ${letterSpacings[size]};
  `;
}
