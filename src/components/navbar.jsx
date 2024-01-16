import "../styles/navbar.css"
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

    let location = useLocation()
    let path = location.pathname.startsWith('/adminPortal')

    return (

        <div className="Navbar">

            <div className="logo">

                <div><img id="space1" src="/images/navlogo.svg" height="60" alt="" /></div>

                <h2 id="logoid">Greenwich Library</h2>

            </div>

            <div className="links">

                {/* {location.pathname == '/adminPortal' ? <div><Link id="space" to="/adminPortal">Home</Link></div> : <div><Link id="space" to="/userPortal/">Home</Link></div>}

                {location.pathname == '/adminPortal/Books' ? <div><Link id="space" to="/adminPortal/Books">Books</Link></div> : <div><Link id="space" to="/userPortal/Books">Books</Link></div>}

                {location.pathname == '/adminPortal' && <div><Link id="space" to="/adminPortal/users">Users</Link></div>
                }

                {location.pathname == '/adminPortal' && <div><Link id="space" to="/adminPortal/adduser">Add Users</Link></div>
                }

                {location.pathname == '/adminPortal' && <div><Link id="space" to="/adminPortal/addbook">Add Books</Link></div>
                } */}

                {path ?
                    <div className="link1">
                        <div><Link id="space" to="/adminPortal">Home</Link></div>
                        <div><Link id="space" to="/adminPortal/Books">Books</Link></div>
                        <div><Link id="space" to="/adminPortal/users">Users</Link></div>
                        <div><Link id="space" to="/adminPortal/adduser">Add Users</Link></div>
                        <div><Link id="space" to="/adminPortal/addbook">Add Books</Link></div>
                        <div><Link id="space" to="/">Logout</Link></div>
                    </div>
                    :
                    <div className="link1">
                        <div> <Link id="space" to="/userportal">Home</Link></div>
                        <div> <Link id="space" to="/userportal/books">Books</Link></div>
                        <div> <Link id="space" to="/userportal/favourites">Favourites</Link></div>

                        <div> <Link id="space" to="/userlogin">Logout</Link></div>
                    </div>

                }

            </div>

        </div>
    );
}

export default Navbar;