function EducationOutput({educationEntries, editEducationEntry, deleteEducationEntry}) {
    return <ul className="cvSection">
        <h2>Education:</h2>
        {educationEntries.map((education) => {
            return <li key={education.id} className="cvEntry">
                <h2>{education.degree}, {education.major}</h2>
                <div className="entrySubtitle">
                    <div>{education.school}, {education.location}</div>
                    <div>{education.startDate} - {education.endDate}</div>
                </div>
                
                <div>{education.details}</div>
                <div>
                    <button className="outputButton" onClick={() => editEducationEntry(education.id)}>
                        Edit
                    </button>
                    <button className="outputButton" onClick={() => deleteEducationEntry(education.id)}>
                        Delete
                    </button>
                </div>
            </li>;
        })}
    </ul>   
}

export default EducationOutput