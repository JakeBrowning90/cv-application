import PersonalOutput from "./PersonalOutput"
import SummaryOutput from "./SummaryOutput"
import ExperienceOutput from "./ExperienceOutput"
import EducationOutput from "./EducationOutput"

//Draw div to display all information added by user with applied styles
function CVOutput(props) {
    const currentPersonal = props.currentPersonal
    const currentSummary = props.currentSummary
    const experienceEntries = props.experienceEntries
    const editExperienceEntry = props.editExperienceEntry
    const deleteExperienceEntry = props.deleteExperienceEntry
    const educationEntries = props.educationEntries
    const editEducationEntry = props.editEducationEntry
    const deleteEducationEntry = props.deleteEducationEntry

    return <div className="cvOutput">
        <PersonalOutput currentPersonal={currentPersonal}/>
        <SummaryOutput currentSummary={currentSummary}/>
        <ExperienceOutput experienceEntries={experienceEntries} editExperienceEntry={editExperienceEntry} deleteExperienceEntry={deleteExperienceEntry}/>
        <EducationOutput educationEntries={educationEntries} editEducationEntry={editEducationEntry} deleteEducationEntry={deleteEducationEntry}/>
        <h2>References available upon request</h2>
    </div>
}

export default CVOutput;