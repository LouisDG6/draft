import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/bigmomscakies">
                <h1 class=" ">Big Mom's Cakies</h1>
            </Link>
        </nav>
    )
}

export default Header;