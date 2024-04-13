import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SignUp from '../Authentication/SignUp'
import Login from '../Authentication/Login'

function HomeComponent() {
  return (
    <div>
      <Container maxW="xl" centerContent>
        <Box display='flex' justifyContent='center' p={3} bg={'white'} w={'100%'} m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
            <Text fontSize="2em">Talk-A-Tive</Text>
        </Box>
        <Box p={3} bg={'white'} w={'100%'} m="0 0 40px 0" borderRadius="lg" borderWidth="1px">
            <Tabs variant='soft-rounded' colorScheme='yellow'>
                <TabList mb={"1em"}>
                    <Tab width={"50%"}>Login</Tab>
                    <Tab width={"50%"}>Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login></Login>
                    </TabPanel>
                    <TabPanel>
                        <SignUp></SignUp>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
      </Container>
    </div>
  )
}

export default HomeComponent
