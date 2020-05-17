import React from 'react';
import { IconContext } from 'react-icons';
import { setColor } from '../../styles';

const Icon = ({
  className,
  color = setColor.primaryColor,
  size = '1.5em',
  children,
}) => {
  return (
    <IconContext.Provider
      value={{ color: color, size: size, className: className }}
    >
      <div>{children}</div>
    </IconContext.Provider>
  );
};

export default Icon;
