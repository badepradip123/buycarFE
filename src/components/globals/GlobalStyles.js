import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from '../../styles';
const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Anton|Gugi|Lato|Roboto|Sofia&display=swap');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

*:focus {
    outline: none;
    
}

body{
 font-size:100%;
 color:${setColor.mainBlack};
 background:${setColor.lightWhite};
 ${setFont.fira};
 overflow-x: hidden;
 
}
h1{
 font-size:3em;line-height:1.2;margin-bottom:0.5em
}
h2{
 font-size:2em;margin-bottom:0.75em
}
h3{
 font-size:1.5em;line-height:1;margin-bottom:1em
}
h4{
 font-size:1.2em;line-height:1.2;margin-bottom:1.25em;
}
h5{
 font-size:1em;font-weight:bold;
}
h6{
 font-size:1em;font-weight:bold;
}
p{
 line-height:1.5;margin:0 0 1.5rem 0;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
`;

export default Globals;
