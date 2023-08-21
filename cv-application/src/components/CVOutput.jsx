import PersonalOutput from "./PersonalOutput"
import ExperienceOutput from "./ExperienceOutput"
import EducationOutput from "./EducationOutput"

function CVOutput(props) {
    const currentPersonal = props.currentPersonal
    const experienceEntries = props.experienceEntries
    const editExperienceEntry = props.editExperienceEntry
    const deleteExperienceEntry = props.deleteExperienceEntry
    const educationEntries = props.educationEntries
    const editEducationEntry = props.editEducationEntry
    const deleteEducationEntry = props.deleteEducationEntry

    return <div className="cvOutput">
        <PersonalOutput currentPersonal={currentPersonal}/>
        <ExperienceOutput experienceEntries={experienceEntries} editExperienceEntry={editExperienceEntry} deleteExperienceEntry={deleteExperienceEntry}/>
        <EducationOutput educationEntries={educationEntries} editEducationEntry={editEducationEntry} deleteEducationEntry={deleteEducationEntry}/>
        <h2>References available upon request</h2>
    </div>
}

export default CVOutput;