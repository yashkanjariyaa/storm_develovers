import React from "react";
import AppBar from "../components/appBar"
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if(token){
    const user = jwt.decode(token);
        if(!user){
            localStorage.removeItem('token');
            navigate('/login', { replace : true });
        }
    }
    return(
        <AppBar/>
    );
}