import { Button, Container, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { Dispatch, SetStateAction } from "react";
// const Header = () => {
  type ResponseState = {
    success: boolean;
    error?: boolean; // Optional error property (assuming it's not always present)
  };
  
  interface Header {
    setState: Dispatch<SetStateAction<ResponseState>>;
  }
  
const Header: React.FC<Header> = ({ setState }) => {
  const handleJoin = () => {
    setState({ success: false, error: false });
  }

  return (
    <Container maxW={"7xl"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} py={"25px"}>
      <Image width={{ lg: "170px", md: "120px", base: "100px" }} src={logo} />
      <Button display={{ lg: "block", base: "none" }} variant={"solid-blue"} className="matter-font" onClick={handleJoin}>Join Waitlist</Button>
    </Container>
  );
};

export default Header;
