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

  //experience
  const[experience, setExperience] = useState({
    position: '',
    organization: '',
    location: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    id: uuidv4(),
    });
  //experienceEntries
  const[experienceEntries, setExperienceEntries] = useState([]);

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setExperience((experience) => {
      return {
        ...experience,   // Spread Operator               
        [name]: value
      }
    })
  }

  // onSubmit handler for form
  const onSubmitExperience = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = experienceEntries.find(entry => entry.id == experience.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      setExperienceEntries(
        // Add current education form inputs to an object, add the object to an array to be read by the component
        experienceEntries.concat(experience),
      );
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = experienceEntries.indexOf(replaceEntry)
      const editedArray = [...experienceEntries.slice(0,replaceIndex ), experience, ...experienceEntries.slice(replaceIndex + 1)]
      setExperienceEntries(
        editedArray,
      );
    }
    // Clear out the input fields, prepare next ID
    setExperience({
      position: '',
      organization: '',
      location: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
      id: uuidv4(),
    });
  };

  const editExperienceEntry = (id) => {
    const updatedEntry = experienceEntries.find(entry => entry.id == id);
    setExperience({ 
      position: updatedEntry.position,
      organization: updatedEntry.organization,
      location: updatedEntry.location,
      responsibilities: updatedEntry.responsibilities,
      startDate:  updatedEntry.startDate,
      endDate:  updatedEntry.endDate,
      id: updatedEntry.id,
    });
  };

  const deleteExperienceEntry = (id) => {
    // const educationEntries = educationEntries.filter(entry => entry.id !== id);
    setExperienceEntries( experienceEntries.filter(entry => entry.id !== id) );
  };



  return (
    <>
      <Header />
      <main>
        <Formbase 
          personal={personal}
          handlePersonalChange={handlePersonalChange}
          onSubmitPersonal={onSubmitPersonal}
          experience={experience}
          // experienceEntries={experienceEntries}
          handleExperienceChange={handleExperienceChange}
          onSubmitExperience={onSubmitExperience}
        />
        <CVOutput 
          currentPersonal={currentPersonal}
          experienceEntries={experienceEntries}
          editExperienceEntry={editExperienceEntry} 
          deleteExperienceEntry={deleteExperienceEntry} 
        />
      </main>
    </>
  )
}

export default App
