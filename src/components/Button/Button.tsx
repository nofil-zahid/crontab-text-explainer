import { ButtonParam } from "../../interfaces/ButtonParam";
import styles from "./Button.css";


const Button: React.FC<ButtonParam> = (props) => {
    const {callbackFunc} = props;
    return (
        <button style={styles.buttonStyle} onClick={callbackFunc}>random</button>
    );
}

export default Button;