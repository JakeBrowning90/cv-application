//Display currentSummary values 
function SummaryOutput({currentSummary}) {
    return <div className="cvSection summaryOutput" id="summaryOutput">
        <h2>{currentSummary.title}</h2>
        <div>{currentSummary.statement}</div>
    </div>
}

export default SummaryOutput;