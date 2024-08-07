import DisplayControls from "./DisplayControls";
import PersonalForm from "./PersonalForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

// Draw base to hold all forms and display controls
function Formbase({
  toggleCleanView,
  toggleSummaryView,
  toggleExperienceView,
  toggleEducationView,
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
  onSubmitEducation,
}) {
  return (
    <div className="formbase">
      <DisplayControls
        toggleCleanView={toggleCleanView}
        toggleSummaryView={toggleSummaryView}
        toggleExperienceView={toggleExperienceView}
        toggleEducationView={toggleEducationView}
      />
      <PersonalForm
        personal={personal}
        handlePersonalChange={handlePersonalChange}
        onSubmitPersonal={onSubmitPersonal}
      />
      <SummaryForm
        summary={summary}
        handleSummaryChange={handleSummaryChange}
        onSubmitSummary={onSubmitSummary}
      />
      <ExperienceForm
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        onSubmitExperience={onSubmitExperience}
      />
      <EducationForm
        education={education}
        handleEducationChange={handleEducationChange}
        onSubmitEducation={onSubmitEducation}
      />
    </div>
  );
}

export default Formbase;
