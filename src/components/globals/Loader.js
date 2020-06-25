import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import loader from '../../assets/loader.gif';
const Loader = () => {
  return (
    <LoaderOuter>
      <Image src={loader} alt='loading' />
    </LoaderOuter>
  );
};

const LoaderOuter = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export default Loader;
