import React, { useEffect, useState } from "react";
import { style, modalStyle } from "./Input.css";
import { InputParams } from "../../interfaces/InputParams";
import { isValidCronExpression } from "../../functions/validateInputs";
import Modal from "../Modal/Modal";
import { cron_expression_item_detail } from "../../json/cron_expression";

const InputField: React.FC<InputParams> = ({ value, setValue, hasError, setHasError }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExpressionItem, setSelectedExpressionItem] = useState<string>("");

    const openModal = (id: string) => {
        setSelectedExpressionItem(id);
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    useEffect(()=>{
        if (value.split(" ").length === 5)
            setHasError(isValidCronExpression(value));
        else 
            setHasError(false);
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
                    cron_expression_item_detail.map((item, index) => (
                        <span key={index} onClick={()=>openModal(item.id)}>{item.id}</span>
                    ))
                }
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div style={modalStyle.container}>
                    {
                        cron_expression_item_detail.map((exp) =>
                            exp.id === selectedExpressionItem ? (
                                <div key={exp.id}>
                                <h3 style={modalStyle.heading}>{exp.heading}</h3>
                                <hr style={modalStyle.divider} />
                                {Object.entries(exp.detail).map(([key, value]) => (
                                    <div key={key} style={modalStyle.detailRow}>
                                        <span style={modalStyle.detailKey}>{key}</span>
                                        <span style={modalStyle.detailValue}>{ key === 'range' ? value[0]+"-"+value[1] : key === 'range2' ? value[0]+"" : value}</span>
                                    </div>
                                ))}
                                </div>
                            ) : null
                        )
                    }
                </div>
            </Modal>
        </div>
    );
}

export default InputField;
