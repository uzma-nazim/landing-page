import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header/Header'
import circleGp from "../../assets/circle-gp.svg"
const HeroSection = () => {
    return (
        <Box>
            <Header />
            <Box  display={"flex"} justifyContent={"center"} >
                <Box  textAlign={"center"} position={"relative"} top={"0px"} zIndex={2} backgroundColor={"blue.100"}>
                    <Button  variant={"outline-blue"}>Launching Soon</Button>
                    <Heading mt={"10px"} className='matter-bold-font' maxW={"600px"} textAlign={"center"} variant={"h1"}>Next Generation
                        <Box as='span' color={"blue.200"}> AI Based Freelancer</Box> Platform</Heading>
                    <Text variant={"p1"} margin={"25px 0px 60px 0px"} maxW={"500px"} textAlign={"center"} className='matter-font'>Revoluu, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.</Text>
                    <Box backgroundColor={"white.100"} height={"50px"} alignItems={"center"} borderRadius={"100px"} maxW={"600px"} display={"flex"}>
                        <Input variant={"white-input"} placeholder='Enter Email Address' type='text' />
                        <Button variant={"solid-blue"} width={"180px"}>Join Waitlist</Button>

                    </Box>
                    <Image src={circleGp} />
                </Box>
            </Box>
        </Box>
    )
}

export default HeroSection