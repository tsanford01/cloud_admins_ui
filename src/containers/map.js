import React, { useState, useContext }from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from "../constants/themes";
import World from '../images/misc/world_map.png';
import Flat from '../images/misc/flatmap.png';
import Maps from '../components/maps';
import ThreeD from '../images/misc/3dmap.png';
import Poly from '../images/misc/polymap.png';
import Det from '../images/misc/detail_map.jpg';
import Alamy from '../images/misc/alamy.png';

import * as LOC from '../constants/locations';

export default function Map() {

    const [pic, setPic] = useState(World)

    // function flare(coor) {
    //     locations= {"us-west-1":["60%", "20%"],
    //                 "la": ["50%", "20%"]}
    //     return location[coor]
    // }
    
    function toDecimal(per) {
        return parseFloat(per) /100;
    }


    function picChange() {
        if (pic === World) {
            setPic(Det)
        } else {
            setPic(World)
        }
    };

    let place = [LOC.US_EAST_1, LOC.US_EAST_2, LOC.US_WEST_1, LOC.US_WEST_2, 
        LOC.AF_SOUTH_1, LOC.AP_EAST_1, LOC.AP_SOUTHEAST_3, LOC.AP_SOUTH_1, LOC.AP_NORTHEAST_3, 
        LOC.AP_NORTHEAST_2, LOC.AP_SOUTHEAST_1, LOC.AP_SOUTHEAST_2, LOC.AP_NORTHEAST_1, 
        LOC.CA_CENTRAL_1, LOC.EU_CENTRAL_1, LOC.EU_WEST_1, LOC.EU_WEST_2, LOC.EU_SOUTH_1, 
        LOC.EU_WEST_3, LOC.EU_NORTH_1, LOC.ME_SOUTH_1, LOC.SA_EAST_1, LOC.US_GOV_EAST_1, LOC.US_GOV_WEST_1]

    return (
            <Maps>
                { place !== undefined ? place.map(locs => (
                <Maps.Flare onClick={() => {console.log(locs);}} style={{ "--i": locs.lat, "--j": locs.lon, "--k": toDecimal(locs.lat) }}></Maps.Flare>
                )) : null}
                <Maps.World src={ World } alt='world map'/>   
            </Maps>
    )
};
