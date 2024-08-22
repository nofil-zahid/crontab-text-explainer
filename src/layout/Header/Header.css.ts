import { Styles } from '../../interfaces/Styling';

const styles: Styles = {
    header1: {
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: 'cursive',
        margin: 0,
        textAlign: 'center'
    },
    header: {
        color: '#E0E0E0',
        fontSize: '1rem',
        textAlign: 'center',
        marginTop: '10px',
        textWrap: 'wrap'
    },
    center_div: {
        display: 'flex',   
        flexDirection: 'column',
        color: '#00bfa5',
        margin: '20px 0',
        maxWidth: innerWidth-100
    },
};

export default styles;