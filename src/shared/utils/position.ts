import { css } from 'styled-components';

type PositionType = 'absolute' | 'fixed';

export function posCenter(type: PositionType = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
}

export function posCenterX(type: PositionType = 'absolute') {
  return css`
    position: ${type};
    left: 50%;
    transform: translateX(-50%);
  `;
}

export function posCenterY(type: PositionType = 'absolute') {
  return css`
    position: ${type};
    top: 50%;
    transform: translateY(-50%);
  `;
}
