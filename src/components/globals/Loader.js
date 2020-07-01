import React from 'react';
import styled from 'styled-components';
import SquareLoader from 'react-spinners/MoonLoader';
import { setColor } from '../../styles';
const Loader = ({ size }) => {
  return (
    <LoaderOuter>
      <SquareLoader
        size={size || 40}
        color={setColor.primaryColor}
        loading={true}
      />
    </LoaderOuter>
  );
};

const LoaderOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
