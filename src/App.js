
import './App.css';
import React, { useState, useEffect } from 'react';
import './style.css';

import axios from 'axios';
function App(){
  const [photo,setPhoto]=useState(" ");
  const [clientId,setClientId]=useState("SN8WRi6SY8QYPN5u1IGP3JqkADpkgVSNKm7fyy6_w48")
  
  const[result,setResult]=useState([]);

  function handleChange(event)
    {
       setPhoto(event.target.value);
    }
    function handleSubmit(event)
    {
       console.log(photo);
       const url="https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;
       axios.get(url)
       .then(response=>{
         console.log(response);
         setResult(response.data.results);
       });
    }
   return(
    <div>
      <h1>Photo Search App</h1>
      <input className="inputtext"onChange={handleChange} type='text' name="photo" placeholder='Seacrh photos here' />
      <button className="buttonstyle"onClick={handleSubmit}  type="submit">Get Photo</button>
       {result.map((photo)=>(
        <img src={photo.urls.small}/>
       ))}
    </div>
   )

}
export default App;
