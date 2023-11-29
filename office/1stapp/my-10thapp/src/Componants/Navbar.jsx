
import React from "react"
import { AppContect } from "../AppContect"


function Navbar(){
    const val = React.useContext(AppContect)
    return <>

<h1>{val}</h1>
    </>
}

export default Navbar