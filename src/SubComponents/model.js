import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";



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
//   const [data, setData] = useState(Totaldata);

  // useEffect(() => {
  //   console.log('****'+Totaldata)
  // }, []);

  const [allValues, setAllValues] = useState({
    id: "",
    name: "",
    course: "",
    fees: "",
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {

    Totaldata.push(allValues);
    
    // setData(Totaldata);
    console.log(Totaldata);
    console.log(allValues);

    props.setDataFun(allValues)
   
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Student
      </Button>
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
            name="id"
            label="Enter Roll No"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="name"
            name="name"
            label="Enter Name"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="course"
            name="course"
            label="Enter Course"
            variant="standard"
            onChange={changeHandler}
          />
          <br />
          <TextField
            id="fees"
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
      {/* <DashBoard onClick={handleClose}/> */}
    </div>
  );
}

export default ModelView;
