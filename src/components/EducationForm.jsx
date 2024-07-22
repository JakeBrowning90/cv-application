import { useState } from "react";

//Form to collect properties of Education object
function EducationForm({
  education,
  handleEducationChange,
  onSubmitEducation,
}) {
  const [viewEducationForm, setViewEducationForm] = useState(false);
  const toggleEducationForm = () => {
    setViewEducationForm(!viewEducationForm);
  };
  return (
    <div className="educationFormDiv">
      <div className="formHeader educationHeader">
        <h2>Add Education:</h2>
        <button onClick={toggleEducationForm}>
          {viewEducationForm ? "Hide" : "Show"}
        </button>
      </div>
      {viewEducationForm && (
        <form
          className="formGroup"
          id="educationForm"
          onSubmit={onSubmitEducation}
        >
          <label htmlFor="degreeInput">
            Degree / Certification:
            <input
              type="text"
              name="degree"
              id="degreeInput"
              required
              value={education.degree}
              onChange={handleEducationChange}
            />
          </label>
          <label htmlFor="majorInput">
            Major / Area of Study:
            <input
              type="text"
              name="major"
              id="majorInput"
              required
              value={education.major}
              onChange={handleEducationChange}
            />
          </label>
          <label htmlFor="schoolInput">
            School:
            <input
              type="text"
              name="school"
              id="schoolInput"
              required
              value={education.school}
              onChange={handleEducationChange}
            />
          </label>
          <label htmlFor="edLocationInput">
            Location:
            <input
              type="text"
              name="location"
              id="edLocationInput"
              required
              value={education.location}
              onChange={handleEducationChange}
            />
          </label>
          <div className="datesDiv">
            <label htmlFor="edStartDateInput">
              Start date:
              <input
                type="text"
                name="startDate"
                id="edStartDateInput"
                required
                value={education.startDate}
                onChange={handleEducationChange}
              />
            </label>
            <label htmlFor="edEndDateInput">
              End date:
              <input
                type="text"
                name="endDate"
                id="edEndDateInput"
                required
                value={education.endDate}
                onChange={handleEducationChange}
              />
            </label>
          </div>
          <label htmlFor="detailsInput">
            Details
            <textarea
              name="details"
              id="detailsInput"
              placeholder="Courses, awards, extracurriculars, etc."
              required
              value={education.details}
              onChange={handleEducationChange}
            />
          </label>
          <button className="formButton" type="submit">
            Add Education
          </button>
        </form>
      )}
    </div>
  );
}

export default EducationForm;
