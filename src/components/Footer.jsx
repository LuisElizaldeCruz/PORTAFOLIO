import React from "react";
import "../assets/css/Footer.css";
import { SocialNetworkIcon } from "./SocialNetworkIcons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <p className="name-footer">Luis Elizalde</p>
            <div className="social-container">
                <p className="social-title">Redes sociales</p>
                <div className="icons-container">
                    <SocialNetworkIcon
                        url="https://github.com/LuisElizaldeCruz"
                        icono={<GitHubIcon
                            fontSize="large"
                            color="#e3f2fd" />}
                    />
                    <SocialNetworkIcon
                        url="https://www.linkedin.com/in/luis-elizaldec/"
                        icono={<LinkedInIcon
                            fontSize="large"
                            color="#e3f2fd" />}
                    />
                </div>
            </div>
        </footer>
    );
}

