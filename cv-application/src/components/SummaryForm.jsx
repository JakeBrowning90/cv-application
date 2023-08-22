function SummaryForm({summary, handleSummaryChange, onSubmitSummary, hideForm}) {
    return <div className="summaryFormDiv">
        <div className="formHeader summaryHeader">
            <h2>Add Summary:</h2>
            <button onClick={() => hideForm("summaryForm")}>Show/Hide</button>
        </div>
        <form id="summaryForm" onSubmit={onSubmitSummary}>
            <label htmlFor="titleInput">Title:
                <input type="text" name="title" id="titleInput" maxLength="30" required value={summary.title} onChange={handleSummaryChange}/>
            </label>
            <label htmlFor="statementInput">Statement:
                <textarea name="statement" id="statementInput" placeholder="Describe your skills, values, achievements, goals, etc." required value={summary.statement} onChange={handleSummaryChange}/>  
            </label>
            <button className="formButton" type="submit">Update</button>
        </form>
    </div>
}

export default SummaryForm;