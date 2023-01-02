import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Researchers.css";
import Sidebar from './components/Sidebar';

function createData(userId, name, country, industry, status) {
  return { userId, name, country, industry, status };
}

const rows = [
  createData(18908421, "Emiko Asahi", "Japan", "Techology", "Approved"),
  createData(18908422, "Shelomi Keshiya",  "Sri Lanka", "Science", "Approved"),
  createData(18908423, "Olivia 	Charlotte ",  "USA", "Physical Science","Rejected"),
  createData(18908424, "Ishank Naman",  "India", "Bio medical Science", "Approved"),
  createData(18908425, "Min Jing",  "China", "Robotics", "Approved"),
  createData(18908426, "Alyssa Emily",  "Singapore", "IoT", "Approved"),
  createData(18908427, "Hannah Chloe",  "Singapore", "Science","Rejected"),
  createData(18908428, "Noah Oliver",  "USA", "AI","Approved"),
  createData(18908429, "Hiroshi Daiki",  "Japan", "Techology","Rejected"),
  createData(18908430, "Nandun Prabodha", "Sri Lanka", "MIS", "Approved"),

];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
  else (status === 'Rejected')
  {
    return{
      background: '#D21F3C',
      color: 'White',
    }
  }
  
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">country</TableCell>
                <TableCell align="left">Industry</TableCell>
                <TableCell align="left">Status</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.userId}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.country}</TableCell>
                  <TableCell align="left">{row.industry}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
