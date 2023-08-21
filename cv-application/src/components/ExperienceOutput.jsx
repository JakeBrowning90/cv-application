function ExperienceOutput({experienceEntries, editExperienceEntry, deleteExperienceEntry}) {
    return <ul>
        {experienceEntries.map((experience) => {
            return <li key={experience.id}>
                <div>{experience.position}</div>
                <div>{experience.organization}, {experience.location}</div>
                <div>{experience.startDate} - {experience.endDate}</div>
                <div>{experience.responsibilities}</div>
                <div>
                    <button onClick={() => editExperienceEntry(experience.id)}>
                        Edit
                    </button>
                    <button onClick={() => deleteExperienceEntry(experience.id)}>
                        Delete
                    </button>
                </div>
            </li>;
        })}
    </ul>   
}

export default ExperienceOutput