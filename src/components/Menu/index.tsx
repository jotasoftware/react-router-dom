import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about" state="This is the state from HOME/MENU">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
                <li>
                    <Link to="/apihome">Api Home</Link>
                </li>
            </ul>
        </nav>
    )
}