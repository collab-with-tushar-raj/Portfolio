import React from 'react';
import Button from 'react-bootstrap/Button';
import { useGoogleLogin } from '@react-oauth/google';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const Login = ({ setUser }) => {

    const login = useGoogleLogin({
        onSuccess: (res) => setUser(res),
        onError: (err) => console.error(`Login failed: ${err}`)
    });

    return (
        <Container>
            <Image
                src={`${process.env.PUBLIC_URL}/assets/profilePic.jpeg`}
                width='300'
                height='300'
                className='mt-4'
                alt='userProfilePic'
                roundedCircle />
            <div className="horizontalDivider mt-4 mb-4" />
            <Button variant='outline-success' onClick={login}>Google Sign-In</Button>
        </Container>
    )
}

export default Login;