function ExperienceOutput({experienceEntries, editExperienceEntry, deleteExperienceEntry}) {
    return <ul className="cvSection">
        <h2>Experience:</h2>
        {experienceEntries.map((experience) => {
            return <li key={experience.id} className="cvEntry">
                <h2>{experience.position}</h2>
                <div className="entrySubtitle">
                    <div>{experience.organization}, {experience.location}</div>
                    <div>{experience.startDate} - {experience.endDate}</div>
                </div>
                
                <div>{experience.responsibilities}</div>
                <div>
                    <button className="outputButton" onClick={() => editExperienceEntry(experience.id)}>
                        Edit
                    </button>
                    <button className="outputButton" onClick={() => deleteExperienceEntry(experience.id)}>
                        Delete
                    </button>
                </div>
            </li>;
        })}
    </ul>   
}

export default ExperienceOutput;