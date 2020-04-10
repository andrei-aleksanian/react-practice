import React from "react";

const person = (props) => {
    return (
        <div className={"person"}>
            <h2>My Buddy's Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <input type="text" onChange={props.onChange}/>
            <span onClick={props.onClick}>Delete me</span>

        </div>
    );
};

export default person;