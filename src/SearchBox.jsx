import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';

export default function SearchBox({updateGeometry}){

    let [city , setCity] = useState ("");

    const API_URL ="http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY ="caad0d780654d2bc1f5a30a664de37df";

    let getGeometryInfo = async () => {
        let response = await fetch (`${API_URL}?q=${city} &appid=${API_KEY}`);
        let responsejson = await response.json();
        
        let result = {
            city : city,
            lat : responsejson.lat,
            lon : responsejson.lon
        };
        console.log(result);
        return result;
    };

    

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit =  async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getGeometryInfo();
        updateGeometry(newinfo);
    };


    return(
    <div className="Searchbox">
        <h3 className="title">
            Search for the Coordinates
        </h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required 
        onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>)

}