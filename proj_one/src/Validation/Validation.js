import React from 'react';
const validation = (props) => { 
    let validationMessage ="Length long enough";
    if (props.stringLength < 5)
        validationMessage = "Length too short";
    return (
    <div>
        {validationMessage}
    </div>
    );   
    
};

export default validation;