import {
    Card,
    CardBody,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    InputRightElement,
    Box,
    Stack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import { useState, React } from 'react';
// import "../App.css";

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="login-con">
            <div>
                <h1>WELCOME TO TOKO COBA</h1>
            </div>
            <div className='login-data'>
                <Card>
                    <CardBody>
                        <Text>Insert Your Email And Password!</Text>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password' type='password' />
                            <Stack direction='row' spacing={4} align='center'>
                                <Button onClick={() => navigate("/home")}>Log In</Button>
                                <Button onClick={() => navigate("/register")}>Sign Up</Button>
                            </Stack>
                        </FormControl>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default Login;