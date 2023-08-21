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
        <h2>Personal Info form</h2>
        <form onSubmit={onSubmitPersonal}>
            <input type="text" name="username" value={personal.username} onChange={handlePersonalChange}/>
            <input type="text" name="phone" value={personal.phone} onChange={handlePersonalChange}/>
            <input type="text" name="email" value={personal.email} onChange={handlePersonalChange}/>
            <input type="text" name="website" value={personal.website} onChange={handlePersonalChange}/>
            <button type="submit">Update</button>
        </form>

        <h2>Experience Info form</h2>
        <form onSubmit={onSubmitExperience}> 
            <input type="text" name="position" value={experience.position} onChange={handleExperienceChange}/>  
            <input type="text" name="organization" value={experience.organization} onChange={handleExperienceChange}/>  
            <input type="text" name="location" value={experience.location} onChange={handleExperienceChange}/>  
            <input type="text" name="responsibilities" value={experience.responsibilities} onChange={handleExperienceChange}/>  
            <input type="text" name="startDate" value={experience.startDate} onChange={handleExperienceChange}/>  
            <input type="text" name="endDate" value={experience.endDate} onChange={handleExperienceChange}/>  
            <button type="submit">Add Experience</button>
        </form>

        <h2>Education Info form</h2>
        <form onSubmit={onSubmitEducation}>
            <input type="text" name="school" value={education.school} onChange={handleEducationChange}/> 
            <input type="text" name="location" value={education.location} onChange={handleEducationChange}/> 
            <input type="text" name="major" value={education.major} onChange={handleEducationChange}/> 
            <input type="text" name="degree" value={education.degree} onChange={handleEducationChange}/> 
            <input type="text" name="details" value={education.details} onChange={handleEducationChange}/> 
            <input type="text" name="startDate" value={education.startDate} onChange={handleEducationChange}/> 
            <input type="text" name="endDate" value={education.endDate} onChange={handleEducationChange}/> 
            <button type="submit">Add Education</button>
        </form>
    </div>
}

export default Formbase;