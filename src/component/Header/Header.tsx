import { Button, Container, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
// const Header = () => {
type ResponseState = {
  setState: (newState: ResponseState) => void;// Optional error property (assuming it's not always present)
};
const Header: React.FC<ResponseState> = ({ setState }) => {


  return (
    <Container maxW={"7xl"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} py={"25px"}>
      <Image width={{lg:"170px", md:"120px",base:"100px"}} src={logo} />
      <Button display={{lg:"block", base:"none"}} variant={"solid-blue"} className="matter-font" onClick={setState}>Join Waitlist</Button>
    </Container>
  );
};

export default Header;
