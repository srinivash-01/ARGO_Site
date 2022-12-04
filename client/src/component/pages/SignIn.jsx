import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
    FacebookLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";
export default function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    function handleSignUp() {

        navigate("/SignUp");
    };
    return (
        <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            marginTop: "3%"
        }}>

            <h2>SIGN IN</h2>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Labels and inputs for form data */}

                <TextField id="filled-basic" style={{ marginTop: "10px" }} type="email" onChange={(e) => setEmail(e.target.value)} value={email} label="Email" variant="outlined" />
                <TextField id="filled-basic" style={{ marginTop: "10px" }} type="password" onChange={(e) => setPassword(e.target.value)} value={password} label="Password" variant="outlined" />
                <div style={{
                    display: "flex",
                    padding: "15px",
                    height: "70px"
                }}>
                <button type="button" class="btn btn-danger" style={{marginRight: "15px"}} onClick={handleSignUp}>SIGN UP</button>

                    <Button onClick={handleSubmit} variant="contained" type="submit" >Submit</Button>
                    
                </div>

                <GoogleButton
                    style={{ marginTop: "10%" }}
                    onClick={() => { console.log('Google button clicked') }}
                />
                <FacebookLoginButton className="mt-3 mb-3" />
            </form>

        </div>
    );
}