import React from 'react';
// import { googleLogout } from '@react-oauth/google';
import AboutMe from './aboutMe';
import Skills from './skills';
import Qualifications from './qualifications';
import Contact from './contact';
import Image from 'react-bootstrap/Image';

const Home = () => {

    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // }

    const jumpToRelevantDiv = (id) => {
        const relevantDiv = document.getElementById(id);
        const yOffset = -60;
        const y = relevantDiv.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // relevantDiv?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <ul className='list-style-none staticHeader'>
                <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('aboutMe')}>About</li>
                <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('mySkills')}>Skills</li>
                <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('myQualifications')}>Qualifications</li>
                <li className='p-2 display-inline cursor-pointer' onClick={() => jumpToRelevantDiv('contactMe')}>Contact</li>
            </ul>
            <div className='padding-top-5 container'>
                <AboutMe />
                <hr />
                <Skills />
                <hr />
                <Qualifications />
                <hr />
                <Contact />
            </div>
            <footer>
                <a href='https://www.facebook.com/tushar.raj.90/' target='_blank'><Image width='50' height='50' src={`${process.env.PUBLIC_URL}/assets/facebook.png`} roundedCircle /></a>
                <a href='https://twitter.com/raj_tush_28' target='_blank'><Image width='50' height='50' src={`${process.env.PUBLIC_URL}/assets/twitter.png`} className='mx-4' roundedCircle /></a>
                <a href='https://www.instagram.com/raj_tush/' target='_blank'><Image width='50' height='50' src={`${process.env.PUBLIC_URL}/assets/instagram.png`} roundedCircle /></a>
                <p className='mt-2'>Copyright &copy; 2023 Tushar_Raj. All Rights Rserved</p>
            </footer>
        </div>
    )
}

export default Home;