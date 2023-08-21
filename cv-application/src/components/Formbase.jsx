function Formbase({ personal, handlePersonalChange, onSubmitPersonal}) {
    return <div className="formbase">
        <h2>Personal Info form</h2>
        <form onSubmit={onSubmitPersonal}>
            <input type="text" name="username" value={personal.username} onChange={handlePersonalChange}/>
            <input type="text" name="phone" value={personal.phone} onChange={handlePersonalChange}/>
            <input type="text" name="email" value={personal.email} onChange={handlePersonalChange}/>
            <input type="text" name="website" value={personal.website} onChange={handlePersonalChange}/>
            <button type="submit">Update</button>
        </form>

        <h2>Experience Info form</h2>
        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button type="submit">Add Experience</button>
        </form>
        <h2>Education Info form</h2>
        <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button type="submit">Add Education</button>
        </form>
    </div>
}

export default Formbase;