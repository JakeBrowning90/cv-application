function Header() {
    return <header>
        <div className="titlesDiv">
            <h1>CV Application</h1>
            <h2>Made by Jake Browning</h2>
            <h2>for The Odin Project, 2023.</h2>
            <a href="https://jakebrowning90.github.io/personal-portfolio/" target="_blank">Portfolio</a>
        </div>
        <ul className="instructionsDiv">
            <li>Use the forms on the left to add information to your CV.</li>
            <li>Click "Edit" to make changes to an existing entry without removing it.</li>
            <li>Click "Toggle clean view" to hide the buttons on your completed CV.</li>
            <li>Try taking a screengrab!</li>
        </ul>
    </header>
}

export default Header;