function SummaryForm({personal, handlePersonalChange, onSubmitPersonal, hideForm}) {
    return <div className="summaryFormDiv">
        <div className="formHeader summaryHeader">
            <h2>Add Summary:</h2>
            <button onClick={() => hideForm("summaryForm")}>Show/Hide</button>
        </div>
        <form id="summaryForm" onSubmit={onSubmitPersonal}>
            <label htmlFor="titleInput">Title:
                <input type="text" name="title" id="titleInput" maxLength="30" required value={personal.username} onChange={handlePersonalChange}/>
            </label>
            <label htmlFor="statementInput">Statement:
                <textarea name="statement" id="statementInput" placeholder="Describe your skills, values, achievements, goals, etc." required value={personal.username} onChange={handlePersonalChange}/>  
            </label>
            <button className="formButton" type="submit">Update</button>
        </form>
    </div>
}

export default SummaryForm;