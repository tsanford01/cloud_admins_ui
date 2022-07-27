import styled from "styled-components";
import * as theme from '../../../constants/themes';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 40px;
    border-bottom: 5px solid rgb(0, 158, 219);
    border-top: 5px solid rgb(0, 158, 219);
    background-color: ${({ theme }) => theme.colors.header};
    transition: 2s;
`;

export const MainLogo = styled.img`
    // filter: opacity(50%);
    object-fit: cover;
    height: 40px;
    filter: ${({ theme }) => {if (theme.name === "dark-theme"){return "invert(1)"}}}};
    transition: 2s;
`;

// export const Map = styled.img`
//     filter: ${({ theme }) => {if (theme.name === "dark-theme"){return "invert(0)"} else {return "invert(1)"}}}};
//     transition: 2s;
// `;