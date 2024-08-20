import React, { useEffect, useState } from "react";
import { style } from "./Input.css";
import { InputParams } from "../../interfaces/InputParams";
import { isValidCronExpression } from "../../functions/validateInputs";
import Modal from "../Modal/Modal";

const InputField: React.FC<InputParams> = ({ value, setValue, hasError, setHasError }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const expression = ["minute", "hour", "day-of-month", "month", "day-of-week"];

    useEffect(()=>{
        setHasError(isValidCronExpression(value));
    }, [value, setHasError])

    return (
        <div style={style.container}>
            <input 
                type="text" 
                style={!hasError ? { ...style.input_field, ...style.error_input } : style.input_field}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            />
            <div style={style.expression_items}>
                {
                    expression.map((item, index) => (
                        <span key={index} onClick={openModal}>{item}</span>
                    ))
                }
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
            </Modal>
        </div>
    );
}

export default InputField;
