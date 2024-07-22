import PersonalOutput from "./PersonalOutput";
import SummaryOutput from "./SummaryOutput";
import ExperienceOutput from "./ExperienceOutput";
import EducationOutput from "./EducationOutput";

//Draw div to display all information added by user with applied styles
function CVOutput({
  currentPersonal,
  currentSummary,
  experienceEntries,
  editExperienceEntry,
  deleteExperienceEntry,
  educationEntries,
  editEducationEntry,
  deleteEducationEntry,
  cleanView,
}) {
  return (
    <div className="cvOutput">
      <PersonalOutput currentPersonal={currentPersonal} />
      <SummaryOutput currentSummary={currentSummary} />
      <ExperienceOutput
        experienceEntries={experienceEntries}
        editExperienceEntry={editExperienceEntry}
        deleteExperienceEntry={deleteExperienceEntry}
        cleanView={cleanView}
      />
      <EducationOutput
        educationEntries={educationEntries}
        editEducationEntry={editEducationEntry}
        deleteEducationEntry={deleteEducationEntry}
        cleanView={cleanView}
      />
      <h2>References available upon request</h2>
    </div>
  );
}

export default CVOutput;
