import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Header/Header";
import circleGp from "../../assets/circle-gp.svg";
const HeroSection = () => {
    type ResponseState = {
        success : boolean;
        error?: boolean; // Optional error property (assuming it's not always present)
    };
    const [state, setState] = useState<ResponseState>({
        success :false,
        error: false,
    });
    const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setState((prevState: ResponseState) => {
            if (prevState.success ) {
                return { ...prevState, success : false, error: true }; // Reset success  and set error
            } else {
                return { ...prevState, error: true }; // Set error only if not already successful
            }
        });

    };

    return (
        <Box height={"100vh"} width={"100%"}>
            <Header setState={setState} />
            <Box mt={{lg:"0px", base:'35px'}} px={"10px"} display={"flex"} justifyContent={"center"}>
                <Box
                    textAlign={{sm:"center", base:"start"}}
                    mx={"auto"}
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    //   justifyContent={"center"}
                    position={"relative"}
                    top={"0px"}
                    zIndex={2}
                    backgroundColor={"blue.100"}
                >
                    <Button display={{lg:'block', base:'none'}} variant={"outline-blue"}>Launching Soon</Button>

                    <Box display={"flex"} justifyContent={{sm:"center", base:"flex-start"}} position={"relative"}>
                        <Heading
                            mt={"10px"}
                            position={"absolute"}
                            transition={".9s"}
                            className="matter-bold-font"
                            maxW={{lg: "400px", base:'300px'}}
                            // textAlign={"center"}
                            mx={"auto"}
                            opacity={state.success   ? 1 : 0}
                            variant={"h1"}
                        >
                            Thanks For Your
                            <Box as="span" color={"blue.200"}>
                                {" "}
                                Response{" "}
                            </Box>
                        </Heading>
                        <Heading
                            mt={"10px"}
                            position={"absolute"}
                            transition={".9s"}
                            className="matter-bold-font"
                            maxW={{lg: "430px", base:'350px'}}

                            // textAlign={"center"}
                            mx={"auto"}
                            opacity={state.error ? 1 : 0}
                            variant={"h1"}
                        >
                            Response Already
                            <Box as="span" color={"blue.200"}>
                                {" "}
                                Submitted{" "}
                            </Box>
                        </Heading>

                        <Heading
                            mt={"10px"}
                            className="matter-bold-font"
                            opacity={state.success  || state.error ? 0 : 1}
                            transition={".9s"}
                            maxW={{ lg: "600px", md:"500px",base:"400px"}}
                            // textAlign={"center"}
                            variant={"h1"}


                        >
                            Next Generation
                            <Box as="span" color={"blue.200"}>
                                {" "}
                                AI Based Freelancer
                            </Box>{" "}
                            Platform
                        </Heading>
                    </Box>

                    <Text
                        variant={"p1"}
                        margin={{lg:"20px 0px 50px 0px", base:"14px 0px 30px 0px"}}
                        maxW={{lg:"500px", base:"400px"}}
                        // textAlign={"center"}
                    >
                        Revoluu, an open-source platform, serves as an all-in-one
                        replacement of Linear, Jira, Slack, and Notion.
                    </Text>
                    <Box
                        backgroundColor={"white.100"}
                        height={{lg:"50px", base:"43px"}}
                        alignItems={"center"}
                        borderRadius={"100px"}
                        gap={"10px"}
                        width={{lg:"450px", sm:"400px", base:"100%"}}
                        display={{lg:"flex", base:"block"}}
                        as="form"
                        // flexDirection={{lg:"row", base:"column"}}
                        onSubmit={handleJoin}
                        opacity={state.success  || state.error ? 0 : 1}
                        transform={".9s"}
                    >
                        <Input
                            variant={"white-input"}
                            placeholder="Enter Email Address"
                            type="text"
                        />
                        <Button


                            type="submit"
                            variant={"solid-blue"}
                            position={"relative"}
                            left={{lg:"4px", base:"2px"}}
                            width={{lg:"200px", base:'100%'}}
                            mt={{lg:"0px", base:"15px"}}
                        >
                            Join Waitlist
                        </Button>
                    </Box>
                    <Image
                        transform={state.success  || state.error ? "translateY(-130px)" : "translateY(0px)"}
                        transition={".5s"}

                        mt={{lg:"42px", base:"70px"}} src={circleGp} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
