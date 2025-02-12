import globeLogo from "/src/assets/Globe.png"

function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src={globeLogo} alt="Globe logo" />
            <span className="nav-text">my travel journal.</span>
        </nav>
    )
}

export default Header