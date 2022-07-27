import React from 'react';
import { Button } from './styles/buttons';

export default function PillButton({ children, ...restProps }) {
    return <Button { ...restProps }>{ children }</Button>
};