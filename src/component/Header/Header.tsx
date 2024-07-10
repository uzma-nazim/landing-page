import { Button, Container, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { Dispatch, SetStateAction } from "react";
// const Header = () => {
type ResponseState = {
  success: boolean;
  error?: boolean; // Optional error property (assuming it's not always present)
  isFocus?: boolean; // Optional error property (assuming it's not always present)
};

interface Header {
  setState: Dispatch<SetStateAction<ResponseState>>;
}

const Header: React.FC<Header> = ({ setState }) => {
  const handleJoin = () => {
    // setState({ success: false, error: false });
    setState((prevState: ResponseState) => {
      if (prevState.isFocus && (prevState.success || prevState.error)) {
        return { isFocus: false, success: false, error: false }; // Reset success  and set error
      } else {
        return { ...prevState, isFocus: true }; // Set error only if not already successful
      }
    });
  };

  return (
    <Container
      maxW={"7xl"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      py={{ lg: "20px", base: "40px" }}
      px={"30px"}
    >
      <Image width={{ lg: "170px", md: "120px", base: "100px" }} src={logo} />
      <Button
        display={{ lg: "block", base: "none" }}
        variant={"solid-blue"}
        className="matter-font"
        onClick={handleJoin}
      >
        Join Waitlist
      </Button>
    </Container>
  );
};

export default Header;
