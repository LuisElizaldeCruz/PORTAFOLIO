import React from "react";
import "../assets/css/Footer.css"
import { SocialNetworkIcon } from "./SocialNetworkIcons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
    return (
        <footer className="footer">
            <p>Luis Elizalde</p>
            <div className="iconos-continer">
                <SocialNetworkIcon
                    url="https://www.github.com"
                    icono={<GitHubIcon fontSize="large"
                        color="#e3f2fd" />}
                />
                <SocialNetworkIcon
                    url="https://www.linkdin.com"
                    icono={<LinkedInIcon fontSize="large"
                        color="#e3f2fd" />}
                />
            </div>
        </footer>
    );
}

