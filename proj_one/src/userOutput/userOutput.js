import React from 'react';

const userOutput = (props) => {
    return (
    <div>
        <p>Hello my name is {props.name}</p>
        <p>I work in {props.work}</p>
    </div>
    );
};

export default userOutput;

