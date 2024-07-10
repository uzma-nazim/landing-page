import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Header/Header";
import circleGp from "../../assets/circle-gp.svg";
const HeroSection = () => {
  type ResponseState = {
    success: boolean;
    error?: boolean;
    isFocus?: boolean;
  };
  const [state, setState] = useState<ResponseState>({
    success: false,
    error: false,
    isFocus: false,
  });
  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prevState: ResponseState) => {
      if (prevState.success) {
        return { ...prevState, success: false, error: true };
      } else {
        return { ...prevState, success: true };
      }
    });
  };

  const isFocusStyle = {
    border: "2px solid",
    borderColor: "blue.200",
    boxShadow: "0px 4px 20px 0px #FFFFFF33",
  };
  return (
    <Box height={"100vh"} width={"100%"}>
      <Header setState={setState} />
      <Box
        mt={{ lg: "0px", base: "26px" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          textAlign={{ sm: "center", base: "start" }}
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
          <Button
            display={{ lg: "block", base: "none" }}
            cursor={"auto"}
            variant={"outline-blue"}
          >
            Launching Soon
          </Button>

          <Box
            px={"30px"}
            display={"flex"}
            justifyContent={{ sm: "center", base: "flex-start" }}
            position={"relative"}
            // border={"2px solid red"}
            height={ state.success||state.error? {lg:"120px", base:"93px"}:"max-content"}
          >
            <Heading
              mt={"10px"}
              position={"absolute"}
              transition={".9s"}
              className="matter-bold-font"
              // textAlign={"center"}
              mx={"auto"}
              opacity={state.success ? 1 : 0}
              variant={"h1"}
              maxWidth={{ base: "300px", lg: "400px" }}
            //   fontSize={{lg:"48px", base:"39px"}}
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
              maxW={{ lg: "430px", base: "300px" }}
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
              opacity={state.success || state.error ? 0 : 1}
              transition={".9s"}
              maxW={{ lg: "600px", md: "500px", base: "400px" }}
              // textAlign={"center"}
              variant={"h1"}
            //   mb={"30px"}
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
            px={"30px"}
            variant={"p1"}
            margin={{ lg: "20px 0px 50px 0px", base: "14px 0px 30px 0px" }}
            maxW={{ lg: "500px", base: "400px" }}
            // textAlign={"center"}
          >
            Revoluu, an open-source platform, serves as an all-in-one
            replacement of Linear, Jira, Slack, and Notion.
          </Text>
          <Box
            backgroundColor={"white.100"}
            height={{ lg: "50px", base: "52px" }}
            alignItems={"center"}
            borderRadius={"100px"}
            gap={"10px"}
            width={{ lg: "450px", sm: "400px", base: " calc( 100% - 54px)" }}
            mx={"20px"}
            display={{ lg: "flex", base: "block" }}
            as="form"
            sx={state.isFocus ? isFocusStyle : {}}
            onSubmit={handleJoin}
            opacity={state.success || state.error ? 0 : 1}
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
              left={{ lg: "4px", base: "2px" }}
              width={{ lg: "200px", base: "100%" }}
              height={{ lg: "50px", base: "52px" }}
              mt={{ lg: "0px", base: "20px" }}
            >
              Join Waitlist
            </Button>
          </Box>
          <Image
            transform={
              state.success || state.error
                ? "translateY(-130px)"
                : "translateY(0px)"
            }
            transition={".5s"}
            // width={"100%"}

            mt={{ lg: "42px", base: "110px" }}
            src={circleGp}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
