import React from "react";
import { style } from "./Input.css";
import { InputParams } from "../../interfaces/InputParams";

const InputField: React.FC<InputParams> = ({value, setValue}) => {
    return (
        <div style={style.container}>
            <input 
                type="text" 
                style={style.input_field}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
            />
        </div>
    );
}

export default InputField;