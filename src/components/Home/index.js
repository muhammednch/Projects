import LogoTitle from '../../assets/images/logo-m.jpg';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import AnimnatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' M','u','h','a','m','m','a','d']
    const jobArray = ['D','e','v','e','l','o','p','e','r',',',' ']


    useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
}, [])



    return (
        <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={'${letterClass} _12'}>i,</span>
            <br />
            <span className={'${letterClass} _12'}>I </span>
            <span className={'${letterClass} _12'}>am </span>
            <AnimnatedLetters letterClass={letterClass}
            stringArray={nameArray}
            idx={15}/>
            <br />
            <AnimnatedLetters letterClass={letterClass}
            stringArray={jobArray}
            idx={22}/>
             Student
            </h1>
            <h2>Computer Science / Java / Intern</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home