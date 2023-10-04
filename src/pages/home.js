import React from "react";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
// import footer from "../components/Footer";
export default function home(){
    localStorage.clear();
    return(
        <>
            <NavBar/>
            <Intro/>
        </>
    );
}