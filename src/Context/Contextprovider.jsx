import Itemcontext from "./Itemcontext";
import React from "react";
import { useState } from "react";


let ItemcontextProvider=({children})=>{

    const [git,setgit]=useState({})

    return (
        <Itemcontext.Provider value={{git,setgit}}>
            {children}
        </Itemcontext.Provider>
    )
}

export default ItemcontextProvider