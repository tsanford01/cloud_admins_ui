import React, { useState, useContext }from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from "../constants/themes";
import World from '../images/misc/world_map.png';
import Maps from '../components/maps';

export default function Map() {

    // function flare(coor) {
    //     locations= {"us-west-1":["60%", "20%"],
    //                 "la": ["50%", "20%"]}
    //     return location[coor]
    // }
    
    return (
            <Maps>
                <Maps.Flare></Maps.Flare>
                <Maps.World src={ World } alt='world map'/>
                
            </Maps>
    )
};


// { healthFail !== undefined ? healthFail.map(items => (
//     <Maps.Flare loc={flair(items.region)}></Maps.Flare>))
//     : null}

// healthFail = [
//     {
//         name:adsfg,
//         region: "us-west-1"
//     }, 
//     {
//         name:adsfg,
//         region: sdfagojik
//     }
// ]