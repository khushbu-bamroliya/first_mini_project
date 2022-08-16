import React from 'react';
import Button from "@mui/material/Button";

function EditBtn(props){
    return (
        <div>
           <Button onClick={props.editFun} >Edit</Button>
        </div>
    )
}
export default EditBtn;


