import { useState ,createContext,CSSProperties} from 'react'


import './App.css'
import Container from '@mui/material/Container';
import Home from './Pages/Home';
import { Navigate,Route,Routes } from 'react-router-dom';
import DisplayData from './components/DisplayData.jsx';

import Navbar from './components/Navbar.jsx';


export const AppContext = createContext();

function App() {
   
  const [data,setdata]       = useState([]);
 


  return (
   
    <div className='app'>

<AppContext.Provider value={{data,setdata}}>
    
    <Navbar/>
    <Routes>
    
    
    <Route path="/" element={<Home/>}/>
    <Route path="/display" element={<DisplayData/>}/>
    
    </Routes>
    </AppContext.Provider>
    
    
    </div>
    
  )
}

export default App
