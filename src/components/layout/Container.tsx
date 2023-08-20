import React from 'react';

type ContainerElement = React.ElementRef<'div'>;
interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  className?: string;
}

const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (props, forwardRef) => {
    const { children, className = '', ...containerProps } = props;
    return (
      <div ref={forwardRef} className={className} {...containerProps}>
        <div>{children}</div>
      </div>
    );
  },
);

Container.displayName = 'Container';

export default Container;
