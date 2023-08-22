function ExperienceForm({experience, handleExperienceChange, onSubmitExperience, hideForm}) {
    return  <div className="experienceFormDiv">
        <div className="formHeader experienceHeader">
            <h2>Add Experience:</h2>
            <button onClick={() => hideForm("experienceForm")}>Show/Hide</button>
        </div>
        <form id="experienceForm" onSubmit={onSubmitExperience}> 
            <label htmlFor="positionInput">Position:
                <input type="text" name="position" id="positionInput" required value={experience.position} onChange={handleExperienceChange}/>  
            </label>
            <label htmlFor="organizationInput">Organization:
                <input type="text" name="organization" id="organizationInput" required value={experience.organization} onChange={handleExperienceChange}/>  
            </label>
            <label htmlFor="locationInput">Location:
                <input type="text" name="location" id="locationInput" required value={experience.location} onChange={handleExperienceChange}/> 
            </label>
            <div className="datesDiv">
                <label htmlFor="startDateInput">Start date:
                    <input type="text" name="startDate" id="startDateInput" required value={experience.startDate} onChange={handleExperienceChange}/>  
                </label>
                <label htmlFor="endDateInput">End date:
                    <input type="text" name="endDate" id="endDateInput" required value={experience.endDate} onChange={handleExperienceChange}/>  
                </label>
            </div>
            <label htmlFor="responsibilitesInput">Responsibilities:
                <textarea name="responsibilities" id="responsibilitesInput" placeholder="Duties, accomplishments, recognition, etc." required value={experience.responsibilities} onChange={handleExperienceChange}/>  
            </label>
            <button className="formButton" type="submit">Add Experience</button>
        </form>
    </div>
}

export default ExperienceForm;