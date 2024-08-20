// modalStyles.ts
import { Styles } from "../../interfaces/Styling";

export const modalStyles: Styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        position: 'relative',
        backgroundColor: '#616161',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        backgroundColor: '#cc0000',
        borderRadius: '5px',
        padding: '5px',
        fontSize: '24px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: 35,
        height: 35,
    },
    closeButtonHovered: {
        backgroundColor: '#a80000', // Hover effect
    },
};
