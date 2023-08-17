import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useContext } from 'react';
import { AppContext } from '../App';






export default function DisplayData() {
  const {data} = useContext(AppContext)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell>SALDET_DOCDATE</TableCell>
            <TableCell align="center">product</TableCell>
            <TableCell align="center">frequency</TableCell>
            <TableCell align="center">Number_of_days</TableCell>
            <TableCell align="center">mdn_inv_dur</TableCell>
            <TableCell align="center">last_order_date</TableCell>
            <TableCell align="center">expected_order_date</TableCell>
            <TableCell align="center">m_frequent_status</TableCell>
            <TableCell align="center">m_comments</TableCell>
            <TableCell align="center">m_cust_id</TableCell>
            
           
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (

            <TableRow
              key={item.m_cust_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            > 
            
            <TableCell>
                {item.SALDET_DOCDATE}
              </TableCell>
              <TableCell align='center' >{item.product}</TableCell>
              <TableCell align='center' >{item.frequency}</TableCell>
              <TableCell align='center' >{item.Number_of_days}</TableCell>
              <TableCell align='center' >{item.mdn_inv_dur}</TableCell>
              <TableCell align='center' >{item.last_order_date}</TableCell>
              <TableCell align='center' >{item.expected_order_date}</TableCell>
              <TableCell align='center' >{item.m_frequent_status}</TableCell>
              <TableCell align='center' >{item.m_comments}</TableCell>
              <TableCell align='center' >{item.m_cust_id}</TableCell>
            
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

