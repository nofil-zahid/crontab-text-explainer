import { Styles } from "../../interfaces/Styling";

export  const style: Styles = {
    container: {
        justifyContent: 'center',
        margin: '20px 0',
        border: 'none' 
    },
    input_field: {
        padding: '15px',
        width: '400px',
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
