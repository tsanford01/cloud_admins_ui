import styled from "styled-components";
import * as theme from '../../../constants/themes';

export const Container = styled.div`
    // display: flex;
    // justify-content: space-between;
    align-items: center;
    // width: 65%;
    border-bottom: 5px solid rgb(0, 158, 219);
    margin: 0 auto;
    position: relative;

    background-color: ${({ theme }) => theme.colors.background};
    transition: 2s;


`;

export const  Flare= styled.span`
    // position: relative;
    // object-position: 50% 50%;
    background: red;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    z-index: 1;
    // filter: opacity(50%);
    // object-fit: cover;
    position: absolute;
    top: var(--i);
    left: var(--j);
    box-shadow: 0px 0px 3px 3px rgba(255,0,0,.75);
    // filter: ${({ theme }) => {if (theme.name === "dark-theme"){return "invert(1)"}}}};
    transition: 2s;
    animation-delay: calc(-0.5s * var(--k));
    animation: animate 1s alternate infinite;

    @keyframes animate {
        0% {

            // filter: hue-rotate(0deg);
            transform: scale(1.25);

        }
        100% {
            // filter: hue-rotate(360deg);
            transform: scale(0.75);
        }
`;

export const World = styled.img`
    filter: ${({ theme }) => {if (theme.name === "dark-theme"){return "invert(0)"} else {return "invert(1)"}}}});
    transition: 2s;
    width: 100%;
height: 100%;
object-fit: cover;
object-position: 0px 45%;
`;