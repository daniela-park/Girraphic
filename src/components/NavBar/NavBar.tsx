import "./NavBar.css"
import GirraphicLogo from "/GirraphicLogo.png"

function NavBar() {

    return (
        <div className="navbar-container">
            <a href="https://girraphic.com/about/">
                <img src={GirraphicLogo} alt="Girraphic logo"/>
            </a>
            <a href="#">Link1</a>
            <a href="#">link2</a>
            <a href="https://daniela-park.github.io/portfolio/">Contact</a>
        </div>
    )
}

export default NavBar