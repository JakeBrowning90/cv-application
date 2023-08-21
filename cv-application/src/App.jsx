import { useState } from 'react';
import './styles/reset.css';
import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header.jsx';
import Formbase from './components/Formbase.jsx';
import CVOutput from './components/CVOutput.jsx';


function App() {
  const[personal, setPersonal] = useState({
    username:'',
    phone:'',
    email:'',
    website:'',
  });
  
  const[currentPersonal, setCurrentPersonal] = useState({
    username:'',
    phone:'',
    email:'',
    website:'',
  });
  
  const handlePersonalChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    setPersonal((personal) => {
      return {
        ...personal,   // Spread Operator               
        [name]: value
      }
    })
  };
  
  const onSubmitPersonal = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state:
    setCurrentPersonal(personal);
  };

  

  return (
    <>
      <Header />
      <main>
        <Formbase 
          personal={personal}
          handlePersonalChange={handlePersonalChange}
          onSubmitPersonal={onSubmitPersonal}
        />
        <CVOutput 
          currentPersonal={currentPersonal}
        />
      </main>
    </>
  )
}

export default App
