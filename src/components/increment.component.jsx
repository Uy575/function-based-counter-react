import React from "react";

function Increment({handler,dechandler}){
    return (
        <div>
        <button onClick={handler}>Increment</button>
        <button onClick={dechandler}>Increment</button>
        </div>
    );

}

export default Increment;