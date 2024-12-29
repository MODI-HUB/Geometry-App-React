import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function Geometry(){

    const [geometryInfo, setGeometryInfo] = useState ({
        city : "Delhi",
        lat: 28.6517178,
        lon: 77.2219388
    })

    let updateGeometry = (newInfo) => {
        setGeometryInfo(newInfo);
    }


    return ( 
        <div>
            <h2 style={{fontSize : 40}}>Geometry App</h2>
            <SearchBox updateGeometry={updateGeometry}/>
            <br></br>
            <InfoBox info={geometryInfo}/> 
        </div>
        
    );
}