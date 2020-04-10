import React from "react";

const InputValidation = (props) => {
    return (
        <div>
            <input onChange={props.onChange} type={"text"} value={props.value}/>
            <span>{props.message}</span>
        </div>
    );
};

export default InputValidation;