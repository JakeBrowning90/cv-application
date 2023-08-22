import PersonalForm from "./PersonalForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

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
        
        <div>
            <h2 className="formHeader">Include Sections:</h2>
            <label htmlFor="cvSummaryCheckbox" className="controlsLabel">Summary:
                <input type="checkbox" name="" id="cvSummaryCheckbox" onChange={() => hideSection("summaryOutput")}/>
            </label>
            <label htmlFor="cvExperienceCheckbox" className="controlsLabel">Experience:
                <input type="checkbox" name="" id="cvExperienceCheckbox" onChange={() => hideSection("experienceOutput")}/>
            </label>
            <label htmlFor="cvEducationCheckbox" className="controlsLabel">Education:
                <input type="checkbox" name="" id="cvEducationCheckbox" onChange={() => hideSection("educationOutput")}/>
            </label>
        </div>
        <button onClick={hideButtons}>Toggle clean view</button>
        <PersonalForm personal={personal} handlePersonalChange={handlePersonalChange} onSubmitPersonal={onSubmitPersonal} hideForm={hideForm}/>
        <SummaryForm summary={summary} handleSummaryChange={handleSummaryChange} onSubmitSummary={onSubmitSummary} hideForm={hideForm}/>
        <ExperienceForm experience={experience} handleExperienceChange={handleExperienceChange} onSubmitExperience={onSubmitExperience} hideForm={hideForm}/>
        <EducationForm education={education} handleEducationChange={handleEducationChange} onSubmitEducation={onSubmitEducation} hideForm={hideForm}/>
    </div>
}

export default Formbase;