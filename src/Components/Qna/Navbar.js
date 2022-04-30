import Menu from '../../Assets/menu.png';
import Logo from '../../Assets/logo.png';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={Menu} className="menu-icon" style={{ width: "22px", marginRight: "15px", cursor: "pointer" }} />
                <a href="http://localhost:3000"><img src={Logo} className="logo" style={{ width: "130px" }} /></a>
            </nav>
            <div className="sidebar p-0">
                <div id="dismiss">
                    <i className="fas fa-window-close fa-2x text-white"></i>
                </div>
                <div>
                    <h3 className="text-light text-center p-2">&nbsp;&nbsp;&nbsp;</h3>
                    <h5 href="#" className="text-light text-center">Hello</h5>
                </div>
                <div className="list-group list-group-flush">

                </div>
            </div>
        </>
    )
}

export default Navbar