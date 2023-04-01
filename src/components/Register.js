import "../App.css";
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

export const Register = () => {

    const navigate = useNavigate();

    return (
        <div className="login-con">
            <div>
                <h1>Insert Your Data To Register</h1>
            </div>
            <Card>
                <CardBody>
                    <Text>Insert Your Email And Password!</Text>
                    <FormControl isRequired>
                        <Stack direction="row">
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='First Name' />
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Last Name' />
                        </Stack>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' />
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Password' type='password' />
                        <Button onClick={() => navigate("/")}>Sign Up</Button>
                    </FormControl>
                </CardBody>
            </Card>
        </div>
    )
}