import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {
    FacebookLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";
export default function SignUp() {
    const [Username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            Username: Username,
            email: email,
            password: password
        };
        if(user){
            axios.post("/AddUser", { user });
        };
    }

    return (
        <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            marginTop: "3%"
        }}>
            <h2>SIGN UP</h2>
            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TextField id="filled-basic" onChange={(e) => setName(e.target.value)} type="input" value={Username} label="Username" variant="outlined" style={{ marginTop: "10%" }} />
                <TextField id="filled-basic" style={{ marginTop: "10px" }} type="email" onChange={(e) => setEmail(e.target.value)} value={email} label="Email" variant="outlined" />
                <TextField id="filled-basic" style={{ marginTop: "10px" }} type="password" onChange={(e) => setPassword(e.target.value)} value={password} label="Password" variant="outlined" />
                <Button onClick={handleSubmit} variant="contained" type="submit" style={{ margin: "5%", width: "50%" }}>Submit</Button>
                <GoogleButton style={{ marginTop: "10%" }} onClick={() => { console.log('Google button clicked') }} />
                <FacebookLoginButton className="mt-3 mb-3" />
            </form>

        </div>
    );
}