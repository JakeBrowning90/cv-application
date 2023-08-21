function Formbase({ 
    personal, 
    handlePersonalChange, 
    onSubmitPersonal, 
    experience, 
    handleExperienceChange, 
    onSubmitExperience,
    education, 
    handleEducationChange, 
    onSubmitEducation}) {
    return <div className="formbase">

        <div className="personalFormDiv">
            <h2>Add Personal Info:</h2>
            <form onSubmit={onSubmitPersonal}>
                <label htmlFor="usernameInput">Name:
                    <input type="text" name="username" id="usernameInput" required value={personal.username} onChange={handlePersonalChange}/>
                </label>
                <label htmlFor="phoneInput">Phone:
                    <input type="text" name="phone" id="phoneInput" required value={personal.phone} onChange={handlePersonalChange}/>
                </label>
                <label htmlFor="emailInput">Email:
                    <input type="text" name="email" id="emailInput" required value={personal.email} onChange={handlePersonalChange}/>
                </label>
                <label htmlFor="websiteInput">Website:
                    <input type="text" name="website" id="websiteInput" required value={personal.website} onChange={handlePersonalChange}/>
                </label>
                <button className="formButton" type="submit">Update</button>
            </form>
        </div>

        <div className="experienceFormDiv">
            <h2>Add Experience:</h2>
            <form onSubmit={onSubmitExperience}> 
                <label htmlFor="positionInput">Position:
                    <input type="text" name="position" id="positionInput" value={experience.position} onChange={handleExperienceChange}/>  
                </label>
                <label htmlFor="organizationInput">Organization:
                    <input type="text" name="organization" id="organizationInput" value={experience.organization} onChange={handleExperienceChange}/>  
                </label>
                <label htmlFor="locationInput">Location:
                    <input type="text" name="location" id="locationInput" value={experience.location} onChange={handleExperienceChange}/> 
                </label>
                <div className="datesDiv">
                    <label htmlFor="startDateInput">Start date:
                        <input type="text" name="startDate" id="startDateInput" value={experience.startDate} onChange={handleExperienceChange}/>  
                    </label>
                    <label htmlFor="endDateInput">End date:
                        <input type="text" name="endDate" id="endDateInput" value={experience.endDate} onChange={handleExperienceChange}/>  
                    </label>
                </div>
                <label htmlFor="responsibilitesInput">Responsibilities:
                    <textarea name="responsibilities" id="responsibilitesInput" value={experience.responsibilities} onChange={handleExperienceChange}/>  
                </label>
                <button className="formButton" type="submit">Add Experience</button>
            </form>
        </div>

        <div className="educationFormDiv">
            <h2>Add Education:</h2>
            <form onSubmit={onSubmitEducation}>
                <label htmlFor="degreeInput">Degree / Certification:
                    <input type="text" name="degree" id="degreeInput" value={education.degree} onChange={handleEducationChange}/> 
                </label>
                <label htmlFor="majorInput">Major / Area of Study:
                    <input type="text" name="major" id="majorInput" value={education.major} onChange={handleEducationChange}/> 
                </label>
                <label htmlFor="schoolInput">School:
                    <input type="text" name="school" id="schoolInput" value={education.school} onChange={handleEducationChange}/> 
                </label>
                <label htmlFor="edLocationInput">Location:
                    <input type="text" name="location" id="edLocationInput" value={education.location} onChange={handleEducationChange}/> 
                </label>
                <div className="datesDiv">
                    <label htmlFor="edStartDateInput">Start date:
                        <input type="text" name="startDate" id="edStartDateInput" value={education.startDate} onChange={handleEducationChange}/> 
                    </label>
                    <label htmlFor="edEndDateInput">End date:
                        <input type="text" name="endDate" id="edEndDateInput" value={education.endDate} onChange={handleEducationChange}/> 
                    </label>
                </div>
                <label htmlFor="detailsInput">Details
                    <textarea name="details" id="detailsInput" value={education.details} onChange={handleEducationChange}/> 
                </label>
                <button className="formButton" type="submit">Add Education</button>
            </form>
        </div>

    </div>
}

export default Formbase;