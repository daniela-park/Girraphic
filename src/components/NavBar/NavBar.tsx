import "./NavBar.css"
import GirraphicLogo from "/GirraphicLogo.png"

function NavBar() {

    return (
        <div className="navbar-container">
            <div className="logo">
                <a href="https://girraphic.com/">
                    <img src={GirraphicLogo} alt="Girraphic logo" />
                </a>
            </div>
            <div className="links">
                <a href="https://daniela-park.github.io/portfolio/">Work</a>
                <a href="https://github.com/daniela-park">Services</a>
                <a href="https://www.linkedin.com/in/daniela-park/">Contact</a>
            </div>
        </div>
    )
}

export default NavBar;