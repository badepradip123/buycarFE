import styled from 'styled-components';
import { setColor, setRem } from '../../styles';

export const PrimaryBtnOutline = styled.div`
  .btn-outline-primary {
    padding: ${setRem(13)} ${setRem(40)};
    background-color: transparent;
    transition: all 300ms ease-in;
    border-color: ${setColor.primaryColor};
    color: ${setColor.primaryColor};
    &:hover {
      background-color: ${setColor.primaryColor};
      color: ${setColor.mainWhite};
    }
  }
`;

export const BtnOutline = styled.div`
  .btn-outline-primary {
    padding: ${setRem(10)} ${setRem(30)};
    background-color: transparent;
    transition: all 300ms ease-in;
    border-color: ${setColor.primaryColor};
    color: ${setColor.primaryColor};
    &:hover {
      background-color: ${setColor.primaryColor};
      color: ${setColor.mainWhite};
    }
  }
  .btn-primary {
    padding: ${setRem(10)} ${setRem(30)};
    background-color: ${setColor.primaryColor};
    transition: all 300ms ease-in;
    border-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    &:hover {
      background-color: ${setColor.mainWhite};
      color: ${setColor.primaryColor};
    }
  }
`;
