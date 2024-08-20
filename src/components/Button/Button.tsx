import { useState } from 'react';
import { ButtonParam } from "../../interfaces/ButtonParam";
import styles from "./Button.css";


const Button: React.FC<ButtonParam> = (props) => {
    const {callbackFunc} = props;

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const randomCronValues = () => {
        const valArr = [
          "0 2 * 1,2,3 1,5", 
          "5 4 * * 0", 
          "0 22 * * 1-5", 
          "0 0 1,15 * 3", 
          "5 0 * 8 *", 
          "30 08 10 06 *", 
          "00 11,16 * * *", 
          "0 9-17 * * 1-5", 
          "* * * * *",
          "5 */4,6 * * */5,6"
        ];
        callbackFunc(valArr[currentIndex]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % valArr.length);
    }

    return (
        <button style={styles.buttonStyle} onClick={randomCronValues}>random</button>
    );
}

export default Button;