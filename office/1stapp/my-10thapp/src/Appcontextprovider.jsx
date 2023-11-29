import React from "react";

export const Appcontext= React.createContext();


const Appcontextprovider = (children)=>{
    return <Appcontext.Provider value={{Name:"ram"}}>{children}</Appcontext.Provider>
}

export default Appcontextprovider
