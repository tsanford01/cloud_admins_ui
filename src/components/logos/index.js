import React, { Children } from 'react';
import { Container, MainLogo} from './styles/logos.js';

export default function Logos({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
};

Logos.NiceCXone = function LogosNiceCXone({ children, ...restProps }) {
    return <MainLogo { ...restProps } />
};
