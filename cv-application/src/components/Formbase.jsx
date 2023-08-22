import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

function Formbase({ 
    hideButtons,
    hideForm,
    personal, 
    handlePersonalChange, 
    onSubmitPersonal, 
    experience, 
    handleExperienceChange, 
    onSubmitExperience,
    education, 
    handleEducationChange, 
    onSubmitEducation}) {
    return <div className="formbase">
        <button onClick={hideButtons}>Toggle clean view</button>
        <PersonalForm personal={personal} handlePersonalChange={handlePersonalChange} onSubmitPersonal={onSubmitPersonal} hideForm={hideForm}/>
        <ExperienceForm experience={experience} handleExperienceChange={handleExperienceChange} onSubmitExperience={onSubmitExperience} hideForm={hideForm}/>
        <EducationForm education={education} handleEducationChange={handleEducationChange} onSubmitEducation={onSubmitEducation} hideForm={hideForm}/>
    </div>
}

export default Formbase;