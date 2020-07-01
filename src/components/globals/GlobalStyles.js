import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from '../../styles';

const Globals = createGlobalStyle`

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
 line-height:1.5;margin:0 0 1.2rem 0;
}


`;

export default Globals;
