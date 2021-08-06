import React from 'react';
import { Button } from '../Button';
import '../../App.css'
import { SocialIcon } from 'react-social-icons';
import ButtonMailto from '../ButtonMailTo';

function Contact () {
    return (
        <div className="contact-section" id="contact">
            <div className="socials">
                <ButtonMailto mailto="https://vishnuko@gmail.com" />
                <SocialIcon url="https://www.linkedin.com/in/vishnu-kodangattil-545700191" />
                <SocialIcon url="https://github.com/vkodangattil" bgColor="#ffffff" />
                <SocialIcon url="https://www.instagram.com/vishnu_ko1" fgColor="#ffffff"/>
            </div>
        </div>
    );
}

export default Contact;