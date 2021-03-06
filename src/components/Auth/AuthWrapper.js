import styled from 'styled-components';
import { setColor } from '../../styles';
export const AuthWrapper = styled.div`
  .auth-inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .signUp-inner {
    width: 500px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: left;
    margin-top: 1%;
  }

  .auth-wrapper .form-control:focus {
    border-color: ${setColor.primaryColor};
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
    color: ${setColor.primaryColor};
  }
`;
