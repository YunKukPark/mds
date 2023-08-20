import { flexBox } from '@src/shared/utils';
import React, { forwardRef } from 'react';
import { css, styled } from 'styled-components';

type ButtonElement = React.ElementRef<'button'>;
type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Button variant
   */
  variant?: ButtonVariant;
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional className
   */
  className?: string;
}

const Button = forwardRef<ButtonElement, ButtonProps>(
  (props: ButtonProps, forwardRef) => {
    const {
      variant = 'primary',
      children,
      className = '',
      ...buttonProps
    } = props;
    return (
      <StyledButton
        className={className}
        variant={variant}
        ref={forwardRef}
        {...buttonProps}
      >
        {children}
      </StyledButton>
    );
  },
);

export default Button;

// 💅🏻 Styled
const primaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.white[900]};
  background-color: ${({ theme }) => theme.colors.secondary.main};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary.light};
  }
`;

const secondaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.border};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const outlinedButtonStyle = css`
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.blueLight};
  }
`;

const ghostButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  transition: color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const buttonVariantStyleMap = {
  primary: primaryButtonStyle,
  secondary: secondaryButtonStyle,
  outlined: outlinedButtonStyle,
  ghost: ghostButtonStyle,
};

interface StyledButtonProps {
  variant: ButtonVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${flexBox()};
  padding: 0 8px;
  font-weight: 700;
  border-radius: 4px;
  border: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    display: block;
    width: 16px;
    height: auto;
  }

  ${({ variant }) => buttonVariantStyleMap[variant] ?? primaryButtonStyle}
`;
