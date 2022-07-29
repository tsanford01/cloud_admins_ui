import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark, odd } from "../constants/themes";
import * as ROUTES from '../constants/routes';
import Header from '../containers/header';
import Map from '../containers/map';
import Logos from '../components/logos';
import Table from '../containers/tables';


export default function Dashboard() {
    
    const [selectedTheme, setSelectedTheme] = useState(odd);

    function HandleThemeChange() {
        if (selectedTheme === dark) {setSelectedTheme(light)

        } else {
            setSelectedTheme(dark)

        }
    };

    return (
        <ThemeProvider theme={selectedTheme}>
            <Header hTheme={HandleThemeChange} />
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                <Map />
                <Table />
            </div>
        </ThemeProvider>
    )
};