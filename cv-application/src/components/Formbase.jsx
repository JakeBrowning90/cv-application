import DisplayControls from "./DisplayControls";
import PersonalForm from "./PersonalForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

// Draw base to hold all forms and display controls
function Formbase({ 
    hideButtons,
    hideSection,
    hideForm,
    personal, 
    handlePersonalChange, 
    onSubmitPersonal, 
    summary, 
    handleSummaryChange,
    onSubmitSummary,
    experience, 
    handleExperienceChange, 
    onSubmitExperience,
    education, 
    handleEducationChange, 
    onSubmitEducation}) {
    return <div className="formbase">
        <DisplayControls hideSection={hideSection} hideButtons={hideButtons}/>
        <PersonalForm personal={personal} handlePersonalChange={handlePersonalChange} onSubmitPersonal={onSubmitPersonal} hideForm={hideForm}/>
        <SummaryForm summary={summary} handleSummaryChange={handleSummaryChange} onSubmitSummary={onSubmitSummary} hideForm={hideForm}/>
        <ExperienceForm experience={experience} handleExperienceChange={handleExperienceChange} onSubmitExperience={onSubmitExperience} hideForm={hideForm}/>
        <EducationForm education={education} handleEducationChange={handleEducationChange} onSubmitEducation={onSubmitEducation} hideForm={hideForm}/>
    </div>
}

export default Formbase;