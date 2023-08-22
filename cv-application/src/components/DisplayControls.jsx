function DisplayControls({hideSection, hideButtons}) {
    return <div className="cvDisplayControls">
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
        <button onClick={hideButtons}>Toggle clean view</button>
    </div>
}

export default DisplayControls;