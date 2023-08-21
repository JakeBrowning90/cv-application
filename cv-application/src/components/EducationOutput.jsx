function EducationOutput({educationEntries, editEducationEntry, deleteEducationEntry}) {
    return <ul>
        {educationEntries.map((education) => {
            return <li key={education.id}>
                <div>{education.degree}</div>
                <div>{education.major}</div>
                <div>{education.school}</div>
                <div>{education.location}</div>
                <div>{education.startDate}</div>
                <div>{education.endDate}</div>
                <div>{education.details}</div>
                <div>
                    <button onClick={() => editEducationEntry(education.id)}>
                        Edit
                    </button>
                    <button onClick={() => deleteEducationEntry(education.id)}>
                        Delete
                    </button>
                </div>
            </li>;
        })}
    </ul>   
}

export default EducationOutput