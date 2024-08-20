// import React from 'react';
import { useEffect, useState } from "react";
import { TextAreaProps } from "../../interfaces/TextArea";
import { evaluateCronString } from "../../functions/evaluate";
import { style } from "./TextArea.css";

const TextArea: React.FC<TextAreaProps> = (props) => {

    const {text, hasError} = props;

    const [cronDetail, setCronDetail] = useState("");

    useEffect(()=>{

        const cronIn = text.split(" ");

        if (cronIn.length === 5) {
            setCronDetail(evaluateCronString(cronIn));
        }

    }, [text])

    return (
        <p style={style.textStyle}>"{hasError ? cronDetail : ""}."</p>
    );
}

export default TextArea;