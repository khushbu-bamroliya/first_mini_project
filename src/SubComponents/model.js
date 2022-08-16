import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState, } from "react";
import ButtonView from "./addBtn";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};



function ModelView(props) {

  let Totaldata = [...props.value];
  const updata = props.upData;
  const [allValues, setAllValues] = useState({
    id: "",
    name: '',
    course: "",
    fees: "",
  });

  useEffect(() => {

  })




  const changeHandler = (e) => {


    console.log(updata);

    // if(e.target.name!=''){
    //   console.log('ok')

    setAllValues({ ...allValues, [e.target.name]: e.target.value });
    // }
    // else if(e.target.name=='' &&  e.target.id==updata.id){
    //   console.log('not ok')
    // setAllValues({name: updata.name,
    // });

    // }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {





    Totaldata.push(allValues);


    // setData(Totaldata);
    console.log(Totaldata);
    console.log(allValues);


    props.setDataFun(allValues);

    setOpen(false);
  };



  props.editFun(handleOpen);

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleOpen}>
        Add Student
      </Button> */}
      <br />
      <ButtonView handleOpen={handleOpen} />
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add Student Details</h2>
          <TextField
            id="id"
            value={(allValues.id == '') ? updata.id : allValues.id}
            name="id"
            label="Enter Roll No"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="name"
            value={(allValues.name == '') ? updata.name : allValues.name}
            name="name"
            label="Enter Name"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="course"
            value={(allValues.course == '') ? updata.course : allValues.course}
            name="course"
            label="Enter Course"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="fees"
            value={(allValues.fees == '') ? updata.fees : allValues.fees}
            name="fees"
            label="Enter Fees"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={handleClose}>
            Submit
          </Button>
        </Box>
      </Modal>

    </div>
  );
}

export default ModelView;
