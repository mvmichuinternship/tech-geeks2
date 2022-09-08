import { Stack } from "@mui/material";
import React from "react";
import location from '../assets/location.png'

 function MapContainer(){
    return(
        <div className="App"><Stack direction="row" sx={{maxwidth:"100%"}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0407049359665!2d80.15123961435258!3d12.840646221213621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1662584410082!5m2!1sen!2sin"
        width="800"
        height="400"
        style={{ border: "0",alignItems:"center",justifyContent:"center", margin:"3%", padding:"3%", borderRadius:"20px" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <img src = {location} width="400" height="400" style={{ border: "0",alignItems:"center",justifyContent:"center", margin:"3%", padding:"3%", borderRadius:"20px" }}></img>
      </Stack>
    </div>
    );
}

export default MapContainer;