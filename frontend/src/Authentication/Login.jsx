import React from 'react'
import { VStack } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const toast = useToast();

    async function handleSubmit() {
        if ( !email || !Password ) {
            toast({
                title: "Enter all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.get("/api/v1/auth", {
                params: {
                    email: email,
                    Password: Password
                }
            }, config);
        } catch (err) {
            console.log(err)
            toast({
                title: "Some Error Occured",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
        }
    }

    return (
        <VStack spacing={"5px"}>
            <FormControl id="email" isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input placeholder='Enter Your Email' type='email' onChange={(e) => {
                    setEmail(e.target.value)
                }} value={email} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <Input placeholder='Enter Your Password' type='password' onChange={(e) => {
                    setPassword(e.target.value)
                }} value={Password} />
            </FormControl>
            <Button colorScheme='teal' size='sm' mt={"10px"} w={"100%"} onClick={handleSubmit}>
                Login
            </Button>
        </VStack>
    )
}

export default Login
