import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/form" className='nav-link'>Form</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/checkin" className='nav-link'>Checkin</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/calendar" className='nav-link'>Calendar</Link>
                </li>
            </ul>
        </nav>
    );
};

export { Navbar };
