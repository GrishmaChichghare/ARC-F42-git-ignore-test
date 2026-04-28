import {Link} from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <Link to = "/">
                <h2>Jobyy</h2>
            </Link>

            <ul>
                <li className='mr-3'>
                    <Link to ="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link  to = "/jobs">
                        Jobs
                    </Link>
                </li>
            </ul>
            <button className='btn btn-outline-primary '>Logout</button>
        </nav>
    );
}
export default Navbar;