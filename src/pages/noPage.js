import React from "react";
import { Link } from "react-router-dom";

export default function noPage(){
    return(
        <>
            No page
            <Link to="/">Go to home?</Link>
        </>
    );
}