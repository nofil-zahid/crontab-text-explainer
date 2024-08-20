import { Styles } from '../../interfaces/Styling';

const styles: Styles = {
    header1: {
        fontSize: 50,
        margin: 0,
    },
    header: {
        color: '#E0E0E0', // Soft white for text
        fontSize: '1rem', // Adjusted for better readability
        textAlign: 'center',
        marginTop: '10px',
    },
    center_div: {
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',    
        flexDirection: 'column',
        color: '#00bfa5', // Teal color for additional text
        margin: '20px 0', // Added margin for spacing
    },
};

export default styles;