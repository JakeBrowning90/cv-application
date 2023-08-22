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

  const[summary, setSummary] = useState({
    title:'',
    statement:'',
  });
  
  const[currentSummary, setCurrentSummary] = useState({
    title:'',
    statement:'',
  });
  
  const handleSummaryChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
  
    setSummary((summary) => {
      return {
        ...summary,   // Spread Operator               
        [name]: value
      }
    })
  };
  
  const onSubmitSummary = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();
    // Modify state:
    setCurrentSummary(summary);
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

  //education
  const[education, setEducation] = useState({
    school: '',
    location: '',
    major: '',
    degree: '',
    details: '',
    startDate: '',
    endDate: '',
    id: uuidv4(),
  });
  //educationEntries
  const[educationEntries, setEducationEntries] = useState([]);

  const handleEducationChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setEducation((education) => {
      return {
        ...education,   // Spread Operator               
        [name]: value
      }
    })
  }

  const onSubmitEducation = (e) => {
    //Prevent default behavior (form refresh)
    e.preventDefault();

    //Check if education key is already in use
    const replaceEntry = educationEntries.find(entry => entry.id == education.id);

    //if key isn't already in use, add new entry to array 
    if (replaceEntry == undefined) {
      setEducationEntries(
        // Add current education form inputs to an object, add the object to an array to be read by the component
        educationEntries.concat(education),
      );
    }
    else {
      // Insert modified entry back into array
      const replaceIndex = educationEntries.indexOf(replaceEntry)
      const editedArray = [...educationEntries.slice(0,replaceIndex ), education, ...educationEntries.slice(replaceIndex + 1)]
      setEducationEntries(
        editedArray,
      );
    }
    // Clear out the input fields, prepare next ID
    setEducation({
      school : '',
      location: '',
      major : '',
      degree : '',
      details: '',
      startDate : '',
      endDate : '',
      id: uuidv4(),
    });
  };

  const editEducationEntry = (id) => {
    const updatedEntry = educationEntries.find(entry => entry.id == id);
    setEducation({
        school: updatedEntry.school,
        location: updatedEntry.location,
        major: updatedEntry.major,
        degree: updatedEntry.degree,
        details: updatedEntry.details,
        startDate:  updatedEntry.startDate,
        endDate:  updatedEntry.endDate,
        id: updatedEntry.id,
    });
  };

  const deleteEducationEntry = (id) => {
    // const educationEntries = educationEntries.filter(entry => entry.id !== id);
    setEducationEntries( educationEntries.filter(entry => entry.id !== id) );
  };

  const hideButtons = () => {
    let allButtons = document.querySelectorAll(".outputButton");
    for (let button of allButtons) {
      button.classList.toggle("hiddenButton");
    }
  }

  const hideSection = (id) => {
    let cvSection = document.getElementById(id);
    cvSection.classList.toggle("hiddenSection");
  }

  const hideForm = (id) => {
    let form = document.getElementById(id);
    form.classList.toggle("visible");
  }


  return (
    <>
      <Header />
      <main>
        <Formbase 
          hideButtons={hideButtons}
          hideSection={hideSection}
          hideForm={hideForm}
          personal={personal}
          handlePersonalChange={handlePersonalChange}
          onSubmitPersonal={onSubmitPersonal}
          summary={summary}
          handleSummaryChange={handleSummaryChange}
          onSubmitSummary={onSubmitSummary}
          experience={experience}
          handleExperienceChange={handleExperienceChange}
          onSubmitExperience={onSubmitExperience}
          education={education}
          handleEducationChange={handleEducationChange}
          onSubmitEducation={onSubmitEducation}
        />
        <CVOutput 
          currentPersonal={currentPersonal}
          currentSummary={currentSummary}
          experienceEntries={experienceEntries}
          editExperienceEntry={editExperienceEntry} 
          deleteExperienceEntry={deleteExperienceEntry} 
          educationEntries={educationEntries}
          editEducationEntry={editEducationEntry} 
          deleteEducationEntry={deleteEducationEntry} 
        />
      </main>
    </>
  )
}

export default App
