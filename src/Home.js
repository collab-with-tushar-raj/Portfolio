import React from 'react';
import AboutMe from './aboutMe';
import Skills from './skills';
import Qualifications from './qualifications';
import Contact from './contact';
import Image from 'react-bootstrap/Image';
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
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
        </>
    )
}

export default Home;