import { css } from 'styled-components';
import { theme } from '../theme';

const { fontSizes, lineHeights, letterSpacings } = theme;

type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function textStyle(size: Sizes) {
  return css`
    font-size: ${fontSizes[`fontSize${size}`]};
    line-height: ${lineHeights[`lineHeight${size}`]};
    letter-spacing: ${letterSpacings[`letterSpacing${size}`]};
  `;
}
