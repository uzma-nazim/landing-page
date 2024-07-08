import {  Button, Container, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <Container maxW={"8xl"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} py={"25px"}> 
      <Image src={logo} />
      <Button variant={"solid-blue"} className="matter-font">Join Waitlist</Button>
    </Container>
  );
};

export default Header;
