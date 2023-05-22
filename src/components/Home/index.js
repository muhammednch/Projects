import LogoTitle from '../../assets/images/logo-m.jpg';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
        <div className="text-zone">
            <h1> Hi, <br /> I am Muhammad Ahmed

            <br />
            Student
            </h1>
            <h2>Computer Science / Java / Intern</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home