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
        <h2>Personal Info Output</h2>
        <div>{currentPersonal.username}</div>
        <div>{currentPersonal.phone}</div>
        <div>{currentPersonal.email}</div>
        <div>{currentPersonal.website}</div>
        
        <h2>Education Info Output</h2>
        <ExperienceOutput experienceEntries={experienceEntries} editExperienceEntry={editExperienceEntry} deleteExperienceEntry={deleteExperienceEntry}/>

        <h2>Experience Info Output</h2>
        <EducationOutput educationEntries={educationEntries} editEducationEntry={editEducationEntry} deleteEducationEntry={deleteEducationEntry}/>
    </div>
}

export default CVOutput;