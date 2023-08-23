//Display currentPersonal values 
function PersonalOutput({currentPersonal}) {
    return <div className="cvSection personalOutput">
        <h2>{currentPersonal.username}</h2>
        <div>Phone: {currentPersonal.phone} | Email: {currentPersonal.email}</div>
        <div>Web: {currentPersonal.website}</div>
    </div>
}

export default PersonalOutput;