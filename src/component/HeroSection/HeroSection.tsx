import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Header/Header";
import circleGp from "../../assets/circle-gp.svg";
import axios from "axios";
async function sendEmail(email) {
  try {
    // Create a new FormData object
    const formData = new FormData();
    formData.append('Email', email);

    // Make the POST request with axios
    const response = await axios.post('https://script.google.com/macros/s/AKfycbybRnKE5_o0bfnrvF85sLUPfHyYgLmI0eWFSmcNY2cNZM7IXe-qMhVKrjCA8RX_Bymr/exec', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle the response
    const data = response.data;
    console.log(data);
    // alert(data.msg);

    return data;
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
async function doesEmailExist(emailToCheck) {
  try {
    const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQjlF1PRDnllFPBhIqvcSPEfyP8sRyCOnbYcA5XBdoa1G6PcnVLYc0YCNMDx8FGW-t6oByesMcne9iY/pub?output=csv');
    const csvData = response.data;

    // Split the CSV data into lines
    const lines = csvData.split('\n');
    console.log(csvData)
    // Extract the header and rows
    const headers = lines[0].split(',');
    console.log(headers)
    // const emailIndex = headers.indexOf('Email');

    // if (emailIndex === -1) {
    //   throw new Error('No email column found in the CSV data');
    // }

    // Check each row for the email
    for (let i = 1; i < lines.length; i++) {
      const columns = lines[i].split(',');
      if (columns[0].trim() === emailToCheck) {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Error fetching or parsing CSV:', error);
    return false;
  }
}
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
  const [email, setemail] = useState<string>("");
  const [isValidate, setisValidate] = useState<string>("");
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmail = email.trim();
    console.log("isEmail", isEmail);

    if (!isEmail) {
      setisValidate("*Fill this field");
      return;
    }
    if (!validateEmail(email)) {
      setisValidate("*Please Enter The Correct Email Address");
      return;
    }
    console.log(await doesEmailExist(email))
    await sendEmail(email)
    setState((prevState: ResponseState) => {
      setisValidate("");
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
  const inValidStyle = {
    border: "2px solid",
    borderColor: "red",
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
            height={
              state.success || state.error
                ? { lg: "120px", base: "93px" }
                : "max-content"
            }
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
            sx={isValidate ? inValidStyle : state.isFocus ? isFocusStyle : {}}
            onSubmit={handleJoin}
            opacity={state.success || state.error ? 0 : 1}
            transform={".9s"}
          >
            <Input
              variant={"white-input"}
              placeholder="Enter Email Address"
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
          <Text
            width={{ lg: "450px", sm: "400px", base: " calc( 100% - 54px)" }}

            textAlign={"start"}
            // border={"1px solid red"}
            // width={"100%"} 
            px={"25px"}
            variant={"error"}
          >
            {isValidate}
          </Text>
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
