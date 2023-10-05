import React from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <div id='contactMe'>
            <h3>Contact Me</h3>
            <div className='row mt-4'>
                <div className='col-md-6 text-align-left'>
                    <h5>Phone:</h5>
                    <p>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/contact_me.png`}
                            alt='contact'
                            width='50' height='50'
                            rounded />
                        <span>+44 7988899133</span>
                    </p>
                    <h5>Email:</h5>
                    <p>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/email_icon.png`}
                            alt='email'
                            width='50' height='50'
                            rounded />
                        <span>tushar.raj.2890@gmail.com</span>
                    </p>
                    <h5>LinkedIn:</h5>
                    <p>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/linkedIn.png`}
                            alt='email'
                            width='50' height='50'
                            rounded />
                        <a href='https://www.linkedin.com/in/trraj/' target='_blank'>https://www.linkedin.com/in/trraj/</a>
                    </p>
                    <h5>Github:</h5>
                    <p>
                        <Image
                            src={`${process.env.PUBLIC_URL}/assets/github.png`}
                            alt='email'
                            width='50' height='50'
                            rounded />
                        <a href='https://github.com/Tush2890' target='_blank'>https://github.com/Tush2890</a>
                    </p>
                </div>
                <div className='col-md-6 text-align-left'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control type="email" placeholder="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Control type="text" placeholder="subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='message' />
                        </Form.Group>
                        <Button variant='outline-secondary'>Send Message</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact;