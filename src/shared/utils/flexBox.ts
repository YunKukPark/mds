import { css } from 'styled-components';

function convertFullName(value: string): string {
  switch (value) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return value;
  }
}

export function flexBox(jc = 'center', ai = 'center') {
  return css`
    display: flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `;
}
