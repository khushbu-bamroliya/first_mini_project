import React from 'react';
import Button from "@mui/material/Button";

function ButtonView(props){
    return (
        <div>
            <Button variant="outlined" onClick={props.handleOpen}>
                Add Student
            </Button>
        </div>
    )
}
export default ButtonView;


