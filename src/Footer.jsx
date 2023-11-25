import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <p className="copyright"> copyright <CopyrightIcon className="copyright"/> {year} . All Rights Reserved</p>
            </footer>
        </>
    );
};
export default Footer;