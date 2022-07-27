import React, { useState }from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from "../constants/themes";
import Logos from '../components/logos';
import PillButton from '../components/buttons';
import NiceCXoneLogo from '../images/logos/NICE CXone blue.png'
import Map from '../images/misc/world_map.png';


export default function Header({ sTheme, hTheme }) {

    return (
        <Logos>
            <Logos.NiceCXone src={ NiceCXoneLogo } alt='Nice CXone Logo' />
            <PillButton onClick={() => hTheme()} >Theme</PillButton>
        </Logos>
        
    )
};