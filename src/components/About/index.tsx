import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
    const {state, pathname} = useLocation(); 

    return (
        <div>
            <h1>About</h1>
            <p>{state as string}</p>
            <p>{pathname as string}</p>
        </div>
    )
}



