import styled from "styled-components";
import * as theme from '../../../constants/themes';


export const Button = styled.div`
font-family: 'Michroma', sans-serif;
cursor: pointer;
font-size:18px;
margin: 25px;
background-color: rgb(0, 158, 219);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
padding: 10px 30px;
color: white;
text-align: center;
text-shadow: 2px 2px 5px black;
width: 100px;
height: 15px;
transition: 1s;
text-decoration: none;
// z-index: 1;

&:hover {
    letter-spacing: 2px;
}
`;