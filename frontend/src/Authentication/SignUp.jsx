import React from 'react'
import { VStack } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setCPassword] = useState("");
    const toast = useToast();

    async function handleSubmit() {
        if (!name || !email || !Password || !confirmPassword) {
            toast({
                title: "Enter all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top"
            });
            return;
        }

        if (Password !== confirmPassword) {
            toast({
                title: "Passwords Mismatched",
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

            const { data } = await axios.post("/api/v1/user", {
                name, email, Password
            }, config);
        } catch (err) {
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
            <FormControl id="name" isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input placeholder='Enter Your Name' onChange={(e) => {
                    setName(e.target.value)
                }} value={name} />
            </FormControl>
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
            <FormControl id="conf-password" isRequired>
                <FormLabel>
                    Confirm Password
                </FormLabel>
                <Input placeholder='Enter Your Password Again' type='password' onChange={(e) => {
                    setCPassword(e.target.value)
                }} value={confirmPassword} />
            </FormControl>
            <Button colorScheme='teal' size='sm' mt={"10px"} w={"100%"} onClick={handleSubmit}>
                Button
            </Button>
        </VStack>
    )
}

export default SignUp
