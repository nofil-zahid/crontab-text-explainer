import { Styles } from "../../interfaces/Styling";

const getWidthResponsive = (width: number) => {
    if (width>=500 && width<=600) return 350;
    if (width>=450 && width<=500) return 320;
    if (width>=400 && width<=450) return 260;
    if (width>=350 && width<=400) return 260;
    if (width>=300 && width<=350) return 280;

    return 400;
}

export const style: Styles = {
    container: {
        justifyContent: 'center',
        margin: '20px 0',
        border: 'none',
        paddingLeft: 20,
    },
    input_field: {
        padding: window.innerWidth<400 ? '5px' : '15px',
        width:  getWidthResponsive(window.innerWidth),
        fontSize: '2rem',
        fontWeight: 'bold',
        border: '2px solid #00bfa5', 
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#424242', 
        color: '#E0E0E0', 
        outline: 'none'
    },
    expression_items:{ 
        display: "flex",
        justifyContent: 'space-evenly',
        gap: '20px',
        textDecoration: 'underline',
        color: 'whitesmoke',
        cursor: 'pointer'
    },
    error_input:{
        border: '2px solid red',
        animation: 'shake 0.5s',
    }
}

export const modalStyle: Styles = {
    container: {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#1e1e1e',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        maxWidth: '600px',
        margin: 0,
        color: '#f5f5f5',
    },
    heading: {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#f5f5f5',
    },
    divider: {
        borderTop: '1px solid #333',
        margin: '10px 0',
    },
    detailRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        color: '#cccccc',
    },
    detailKey: {
        fontWeight: 'bold',
        flex: 1,
        marginRight: '10px',
        color: '#f5f5f5',
    },
    detailValue: {
        flex: 2,
        textAlign: 'right',
        color: '#ffffff',
    },
}
