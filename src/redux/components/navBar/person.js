import React from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

export default function Person({name, email, phone, id}) {
    // const navigate = useNavigate()
    // handleNavigateTo = () =>{
    //     navigate(`/${id}`)
    // }
    return (
    <div className="person">
        <div className="name">name:{name}</div>
        <div>email:{email}</div>
        <div>phone:{phone}</div>
        <Link to="/">
            <Button variant="contained">Click to Wiew Details</Button>
        </Link>
    </div>
  );
}
