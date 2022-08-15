import React, {  useEffect,useState} from "react";
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


//blooklist

function DashBoard() {

  const [data,setData]=useState([
    { id: 1, name: "khushbu ", course: "React", fees: 15000 },
    { id: 2, name: "parul ", course: "Node", fees: 17000 },
  ])



  const editStudent = (editId) => {
    console.log('edited data',editId);
   
    const items = data.map((item)=>{ 
      if(item.id == editId){
        console.log(item.name);
      }
    });
    
  };

  const deleteStudent = (itemId) => {
    console.log("Deleted",itemId);
   
       const items = data.filter(item => item.id !== itemId);
       console.log(items)
     
       setData(items)
   
  };

  const handleData = (et) =>{
    console.log("ttt", et);
  
    setData([...data,et]);
    
  }

  useEffect(() => {
    setData(...[data])
  }, []);

console.log("data",data);
  return (
    <div>
      <ModelView value={data} setDataFun={handleData}/>
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
            {data.map((row) => (
            
              <TableRow
                key={row.id} 
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.fees}</TableCell>

                <TableCell align="right">
                  <Button  onClick={()=>editStudent(row.id)} >Edit</Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={()=>deleteStudent(row.id)}>Delete</Button>
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
