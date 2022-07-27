import React, { Children } from 'react';
import { Container, World, Flare } from './styles/maps.js';

export default function Maps({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
};

Maps.World = function MapWorld({ children, ...restProps }) {
    return <World { ...restProps } />
};

Maps.Flare = function MapFlare({ children, ...restProps }) {
    return <Flare { ...restProps }>{children}</Flare>
};