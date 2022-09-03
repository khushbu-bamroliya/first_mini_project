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
  // props.upData.id==''?null:props.upData.id;
  // props.upData.name==''?null:props.upData.name;
  // props.upData.course==''?null:props.upData.course;
  // props.upData.fees==''?null:props.upData.fees;
  let updata = props.upData == {} ? null : props.upData;

  console.log("updata", updata);
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

    if (!allValues.id && !allValues.name &&
      !allValues.course && !allValues.fees) {
      alert("plz fill data")
    }
    else if (updata.id != null &&
      updata.name != null &&
      updata.course != null &&
      updata.fees != null) {
      console.log('edited')
      Totaldata.map(d => {

        if (d.id == updata.unikId) {
          return setAllValues([...Totaldata,
          allValues.id = allValues.id == '' ? updata.id : allValues.id,
          allValues.name = allValues.name == '' ? updata.name : allValues.name,
          allValues.course = allValues.course == '' ? updata.course : allValues.course,
          allValues.fees = allValues.fees == '' ? updata.fees : allValues.fees,
          ])
        }
        const objIndex = Totaldata.findIndex((obj => obj.id == updata.id));
        Totaldata[objIndex] = allValues
        props.value[objIndex] = allValues
      }
      )
      updata.id = null;
      updata.name = null;
      updata.course = null;
      updata.fees = null;
      setOpen(false);
    }
    else if (updata.id == null &&
      updata.name == null &&
      updata.course == null &&
      updata.fees == null) {
      console.log('pushed')
      Totaldata.push(allValues);
      props.setDataFun(allValues);
      setOpen(false);
      setAllValues({})
    }
  };
  props.editFun(handleOpen);

  return (
    <div>
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
