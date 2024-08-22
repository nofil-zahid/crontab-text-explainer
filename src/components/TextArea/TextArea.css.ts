import { Styles } from "../../interfaces/Styling";

export const style: Styles = {
    textStyle: {
        fontSize: '2rem',
        maxWidth: innerWidth < 600 ? innerWidth : '700px',
        color: '#E0E0E0',
        wordWrap: 'break-word',
        textAlign: 'center',
        margin: '20px 0',
        minHeight: 70,
        fontStyle: 'italic'
    },
}