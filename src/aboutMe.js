import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CARDS_DATA } from './constants';

const AboutMe = () => {
    const handleObserver = (entries) => {
        const firstEntry = entries[0];
        const header = document.querySelector('.staticHeader');
        if (header) {
            if (firstEntry.isIntersecting) {
                header.classList.remove('aboutMeNotInViewPort');
            }
            else {
                header.classList.add('aboutMeNotInViewPort');
            }
        }
    }

    useEffect(() => {
        const aboutMeObserver = new IntersectionObserver(handleObserver, { threshold: 0.5 });
        const aboutMeSection = document.querySelector('#aboutMe');
        aboutMeObserver.observe(aboutMeSection);
    }, []);

    return (
        <div id='aboutMe'>
            <Row>
                <Col xs={6} md={4}>
                    <Image
                        src={`${process.env.PUBLIC_URL}/assets/profilePic.jpeg`}
                        width='300'
                        height='300'
                        className='mt-4'
                        alt='userProfilePic'
                        rounded />
                </Col>
                <Col xs={6} md={8} className='text-align-left'>
                    <h3>My Name is Tushar Raj</h3>
                    <p>I have 9.2 years of rich experience in software engineering. I have worked with various domains like Healthcare, IoT and Field Service Automation. I am seeking out a challenging role that utilizes my skills greatly to help grow the organization’s business.</p>
                    <p>I am a highly skilled professional in building web products. My expertise lies in product designing, the right use of engineering processes, the use of efficient algorithms that optimize the solution and enhance the app performance and architecting the product well enough so that the product scales without any disturbance in the framework.</p>
                    <p>I have been mentoring and leading the team for 5+ years and have a rich leading experience when it comes to end-to-end delivery of the product. I am also a valuable individual contributor and can singlehandedly take the product to heights by achieving milestones.</p>
                    <Row>
                        <Col xs={6} md={4}>
                            <p className='text-align-left'><b>Age: </b>33</p>
                            <p className='text-align-left'><b>Gender: </b>Male</p>
                            <p className='text-align-left'><b>Language: </b>English, Hindi</p>
                            <p className='text-align-left'><b>Work: </b>Software Developer</p>
                            <p className='text-align-left'><b>Availability: </b>Immediately Available</p>
                            <p className='text-align-left'>
                                <a href={`${process.env.PUBLIC_URL}/assets/Tushar_Raj_CV.pdf`} download='Tushar_Raj_CV' target='_blank' rel='noopener noreferrer'>
                                    <Button variant='outline-secondary'>Download CV
                                        <Image
                                            src={`${process.env.PUBLIC_URL}/assets/download_icon.png`}
                                            width='30' height='30' />
                                    </Button>
                                </a>
                            </p>
                        </Col>
                        <Col xs={6} md={8}>
                            <Row>
                                {CARDS_DATA.map(card => <Card key={card.id} className='m-1' style={{ 'width': card.width }}>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.text}</Card.Text>
                                    </Card.Body>
                                </Card>)}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe;