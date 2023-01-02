import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status, status1) {
  return { name, trackingId, date, status, status1 };
}

const rows = [
  createData("Aiysha Hamna", 18908421, "2 March 2022", "Approve", "Reject"),
  createData("Amani Adithya", 18908422, "2 March 2022", "Approve", "Reject"),
  createData("Ryan Andrian", 18908423, "2 March 2022", "Approve", "Reject"),
  createData("Mohommad Aadhil", 18908424, "2 March 2022", "Approve", "Reject"),
];


const makeStyle=(status )=>{
  if(status === 'Approve')
  {
    return {
      background: '#59bfff',
      color: 'White',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

const makeStyle1=(status1 )=>{
  if(status1 === 'Reject')
  {
    return {
      background: '#D21F3C',
      color: 'White',
    }
  }
  else{
    return{
      background: '#D21F3C',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>New Researchers</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">User ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
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
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="status1" style={makeStyle1(row.status1)}>{row.status1}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
