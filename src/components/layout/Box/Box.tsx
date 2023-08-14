import { Box as _Box } from '@radix-ui/themes';
import { styled } from 'styled-components';

type scale = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface BoxProps {
  size?: scale;
  width?: scale;
  height?: scale;
  style?: React.CSSProperties;
}

const Box = (props: BoxProps) => {
  const { size } = props;
  return <S.Box {...props} style={{ ...props.style }} />;
};

const S = {
  Box: styled(_Box)`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.info.main};
    border: 1px solid ${({ theme }) => theme.colors.info.main};
    border-radius: 4px;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  `,
};

export default Box;
