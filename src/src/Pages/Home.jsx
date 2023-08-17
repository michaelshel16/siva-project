import React, { useState,useContext } from 'react';
import { Container } from '@mui/material';

import TextField from '@mui/material/TextField';
import "./Home.css";

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import axios from "axios";
import xtype from "xtypejs";


const Home = () => {

  const{setdata} = useContext(AppContext);
   
  const navigate = useNavigate();
   const [inputObject,setinputObject] = useState(
    {
        customer:"",
        product_in_cart:[""],
        based_on:""
    })

   const handleSubmit = async(e)=>

   { e.preventDefault()
    
    const senderData = 
    {
      id: import.meta.env.VITE_API_ID,
      version:import.meta.env.VITE_API_VERSION,
      arguments:inputObject,
      returnType:"json",
      resourceType:"task",
      isDeploy:false
      
    }

     console.log(inputObject)
     try 
     {
      const result = await axios.post(
        `https://ai-workbench.conversight.ai/resource?token=JWT ${import.meta.env.VITE_API_TOKEN}`,
        senderData)
        console.log(result);
        const displayResult = result.data.data.customer_info;
        if(xtype.type(displayResult)==="array")
        {
          setdata(displayResult)

        }
        else if(xtype.type(displayResult)==="object")
        {
           let data = []
           data.push(displayResult)
           setdata(data);
        }
        
        navigate("/display");
     } 
     catch (error) {
         console.log(error)
     }
    
    
    
   }

  return (

    <div>
        
        <Container>
         <div className='input-container'>
        <form className='input-fields'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}>
        
         
         <TextField id="outlined-basic" name = "customer"
         onChange={(newValue)=>setinputObject({...inputObject,customer:newValue.target.value})} label="Customer" variant="outlined" />
         <TextField id="outlined-basic" name="product_in_cart"
         onChange={(newValue)=>setinputObject({...inputObject,product_in_cart:newValue.target.value})} label="Product in cart" variant="outlined" />
         <TextField id="outlined-basic" name="based_on"
          onChange={(newValue)=>setinputObject({...inputObject,based_on:newValue.target.value})} label="Analysis based on" variant="outlined" />
          
         <Button  type = "submit" variant="contained" >SUBMIT</Button>
          
        </form>
         
        
        </div>

        

        </Container>
      
    </div>
  )
}

export default Home
