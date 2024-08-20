// import React from 'react';
import { useEffect, useState } from "react";
import { TextAreaProps } from "../../interfaces/TextArea";
import { evaluateCronString } from "../../functions/evaluate";
import { style } from "./TextArea.css";

const TextArea: React.FC<TextAreaProps> = (props) => {

    const {text} = props;

    const [cronDetail, setCronDetail] = useState("");

    useEffect(()=>{

        const cronIn = text.split(" ");

        if (cronIn.length === 5) {
            console.log("here we go")
            setCronDetail(evaluateCronString(cronIn));
        }
        else {
            // alert("Issue")
        }

    }, [text])

    return (
        <p style={style.textStyle}>"{cronDetail || "nothing to display"}"</p>
    );
}

export default TextArea;