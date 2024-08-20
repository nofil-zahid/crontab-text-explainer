import React from 'react';
import styles from './Header.css';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <div style={styles.center_div}>
                <p style={styles.header1}>Crontab Explainer</p>
                <p style={styles.header}>The quick editor for crontab expression's explanation</p>
            </div>
        </React.Fragment>
    );
}

export default Header;