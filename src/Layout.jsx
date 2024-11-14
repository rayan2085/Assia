import { Outlet } from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar"
const Layout=()=>{
    return(
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    )
}


export default Layout