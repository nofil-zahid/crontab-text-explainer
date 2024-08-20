import React from 'react';
import footerStyle from './Footer.css';

const Footer: React.FC = () => {
    return (
        <div style={footerStyle.footerContainer}>
            <p style={footerStyle.footerText}>© 2024 Crontab Explainer. All rights reserved.</p>
        </div>
    );
}

export default Footer;
