import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <div className="contactR">
                <Link title='Mail' to='#' onClick={()=>{window.location= 'mailto:soldinididier@wanadoo.fr'}} className="contactR__reseaux"><RiMailSendLine className='bx bx-envelope' /></Link>
                <NavLink title="Github" target='blank' to='https://github.com/Didier-Soldini' className="contactR__reseaux"><SiGithub/></NavLink>
                <NavLink title="LinkedIn" target='blank' to='https://www.linkedin.com/in/didier-soldini-14a874268/' className="contactR__reseaux"><SiLinkedin className='bx bxl-linkedin' /></NavLink>
            </div>
        </>
    );
};

export default Footer;