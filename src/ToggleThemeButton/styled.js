import styled from "styled-components";

export const Switcher = styled.div`
margin-top: -4px;
label {
   width: 100px;
   height: 50px;
   position: relative;
   display: block;
   background: white;
   border-radius: 30px;
   border: 1px solid white;
   cursor: pointer;
   transition: 0.3s;
}

label:after {
   content: "";
   width: 45px;
   height: 45px;
   border-radius: 50%;
   position: absolute;
   top: 2px;
   left: 4px;
   background: linear-gradient(180deg, #ffcc89, #d8860b);
   box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
   transition: 0.3s;
}

input {
   width: 0;
   height: 0;
   visibility: hidden;
}

input:checked + label {
   background: #242424;
}

input:checked + label:after {
   left: 94px;
   transform: translateX(-100%);
   background: linear-gradient(180deg, #777, #3a3a3a);
}

label svg {
   position: absolute;
   width: 30px;
   z-index: 100;
}

label svg.sun {
   left: 16px;
   top: 8px;
   fill: #fff;
   transition: 0.3s;
}

label svg.moon {
   left: 58px;
   top: 8px;
   fill: #7e7e7e;
   transition: 0.3s;
}

input:checked + label svg.sun {
   fill: #7e7e7e;
}

input:checked + label svg.moon {
   fill: #fff ;
}
`;
