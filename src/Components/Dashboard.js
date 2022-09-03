import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ModelView from "../SubComponents/model";
import EditBtn from '../SubComponents/editBtn'

//blooklist

function DashBoard() {

  const [data, setData] = useState([
    { id: "1", name: "khushbu ", course: "React", fees: "15000" },
    { id: "2", name: "parul ", course: "Node", fees: "17000" },
  ])

  const [inputData,setInputData]=useState([{
    id:'',
    name:'',
    course:'',
    fees:''
  }])

  let tfValue=true;

  const tVal=(tf)=>{
    console.log("t f val", tf);
    tfValue=tf;
  }

 

  const editStudent = (editId) => {
    console.log('edited data', tfValue);
    
    let newEditItems=data.find((elm)=>{
      console.log("elm.id: ",elm.id);
      console.log("editId: ",editId);
      return elm.id==editId
    })
    console.log("newedititems",newEditItems);
   
    setInputData({id:newEditItems.id,
      name:newEditItems.name,
      course:newEditItems.course,
      fees:newEditItems.fees,
      unikId:editId,
    })
    tfValue();
   
   
   
  };

  const deleteStudent = (itemId) => {
    console.log("Deleted", itemId);

    const items = data.filter((item,ind) => ind !== itemId);
    console.log(items)
    setData(items)

  };

  const handleData = (et) => {
    console.log("ttt", et);
    setData([...data, et]);
  }


  useEffect(() => {
    setTimeout(() => {
      setData([...data]);
    }, );
  });

  // useEffect(() => {
  //   setData(...[data])
  // }, );

  console.log("data", data);
  return (
    <div>
      <ModelView value={data} setDataFun={handleData} editFun={tVal} upData={inputData}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Roll No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Fees</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row,ind) => (
              <TableRow
                key={ind}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.fees}</TableCell>
                <TableCell align="right">
                  {/* <Button onClick={() => editStudent()} >Edit</Button> */}
                  <EditBtn editFun={()=>editStudent(ind+1)}/>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteStudent(ind)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DashBoard;
