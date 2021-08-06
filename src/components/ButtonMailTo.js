import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import { SocialIcon } from 'react-social-icons';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.open('mailto:vishnuko@gmail.com')
            }}
        >
            <SocialIcon network="email" bgColor="#ffffff" />
        </Link>
    );
};

export default ButtonMailto;