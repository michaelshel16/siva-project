import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function Navbar() {
  
  const navigate     = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Data Display
          </Typography>
          <Button color="inherit" onClick={()=>{navigate("/")}}>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
