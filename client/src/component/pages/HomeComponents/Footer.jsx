import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
    return (
        <div style={{ display: "flex", width: "100", backgroundColor: "#f7f7f7", alignContent: "center", justifyContent: "center", padding: "10px", flexDirection: "column" }}>
            <div style={{ display: "flex", width: "100", backgroundColor: "#f7f7f7", alignContent: "center", justifyContent: "center", padding: "50px" }}>
                <div style={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
                    <FacebookIcon style={{ color: "#000" }} />
                    <EmailIcon style={{ color: "#000" }} />
                    <TwitterIcon style={{ color: "#000" }} />
                    <InstagramIcon style={{ color: "#000" }} />
                </div>
            </div>
            <p style={{textAlign: "center"}}>Copyright © 2022, Perfect Dress Boutique. All Rights Reserved</p>
        </div>
    )
}