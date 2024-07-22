function DisplayControls({
  toggleCleanView,
  toggleSummaryView,
  toggleExperienceView,
  toggleEducationView,
}) {


  return (
    <div className="cvDisplayControls">
      <h2 className="formHeader">Include Sections:</h2>
      <label htmlFor="cvSummaryCheckbox" className="controlsLabel">
        Summary:
        <input
          type="checkbox"
          name="summary"
          id="cvSummaryCheckbox"
          onChange={toggleSummaryView}
        />
      </label>
      <label htmlFor="cvExperienceCheckbox" className="controlsLabel">
        Experience:
        <input
          type="checkbox"
          name=""
          id="cvExperienceCheckbox"
          onChange={toggleExperienceView}
        />
      </label>
      <label htmlFor="cvEducationCheckbox" className="controlsLabel">
        Education:
        <input
          type="checkbox"
          name=""
          id="cvEducationCheckbox"
          onChange={toggleEducationView}
        />
      </label>
      <button onClick={toggleCleanView}>Toggle clean view</button>
    </div>
  );
}

export default DisplayControls;
