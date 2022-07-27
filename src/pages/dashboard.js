import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from "../constants/themes";
import * as ROUTES from '../constants/routes';
import Header from '../containers/header';
import Map from '../containers/map';
import Logos from '../components/logos';


export default function Dashboard() {
    
    const [selectedTheme, setSelectedTheme] = useState(dark);

    function HandleThemeChange() {
        if (selectedTheme === dark) {setSelectedTheme(light)

        } else {
            setSelectedTheme(dark)

        }
    };

    return (
        <>
        <ThemeProvider theme={selectedTheme}>
            <Header hTheme={HandleThemeChange} />
            {/* <Header sTheme={ selectedTheme } hTheme={HandleThemeChange} /> */}
            <Map />
        </ThemeProvider>
        </>
    )
};