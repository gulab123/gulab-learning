import React, { useState } from 'react'

function MyfunctionApp(){
    const [name, setName]=useState("rahual");
    const handle=()=>{
        setName("tewatia");
    }
    return(
        <div class="container">
            <h1>{name}</h1>
            <button onClick={()=>(handle())}>change</button>
        </div>
    )
}
export default MyfunctionApp;
