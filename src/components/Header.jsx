import globeLogo from "/src/assets/Globe.png"

function Header() {
    return (
        <nav className="nav-bar" aria-label="Main Navigation">
            <img 
                className="nav-logo" 
                src={globeLogo} 
                alt="Globe logo" 
                aria-hidden="true"
            />
            <span 
                className="nav-heading" role="heading" aria-level="1">
                    My Travel Journal.
                </span>
        </nav>
    )
}

export default Header