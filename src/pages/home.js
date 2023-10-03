import React from "react";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
export default function home(){
    localStorage.clear();
    return(
        <>
            <NavBar/>
            <Intro/>
        </>
    );
}