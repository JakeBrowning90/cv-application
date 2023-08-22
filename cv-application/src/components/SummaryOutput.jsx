function SummaryOutput({currentSummary}) {
    return <div className="cvSection summaryOutput hiddenSection" id="summaryOutput">
        <h2>{currentSummary.title}</h2>
        <div>{currentSummary.statement}</div>
    </div>
}

export default SummaryOutput;