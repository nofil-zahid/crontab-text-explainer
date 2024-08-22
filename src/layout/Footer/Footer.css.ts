import { Styles } from "../../interfaces/Styling";

const footerStyle: Styles = {
    footerContainer: {
        width: '100%',
        backgroundColor: '#424242', // Dark gray background
        padding: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderTop: '1px solid #616161', // Slightly lighter gray for the border
    },
    footerText: {
        color: '#E0E0E0', // Soft white text
        fontSize: '0.7rem',
        textAlign: 'center',
    },
};

export default footerStyle;
