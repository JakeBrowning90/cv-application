function CVOutput(props) {
    const currentPersonal = props.currentPersonal

    return <div className="cvOutput">
        <h1>CV Output</h1>
        <h2>Personal Info Output</h2>
        <div>{currentPersonal.username}</div>
        <div>{currentPersonal.phone}</div>
        <div>{currentPersonal.email}</div>
        <div>{currentPersonal.website}</div>
        <h2>Education Info Output</h2>
        <h2>Experience Info Output</h2>
    </div>
}

export default CVOutput;