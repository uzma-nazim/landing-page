import { Box, Image } from "@chakra-ui/react";
import React from "react";
interface LayoutProps {
  children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box height={{ lg: "100vh", base: "100%" }} overflow={{ lg: "hidden", base: "auto" }} bg={"blue.100"} >
      <Box
        position={"absolute"}
        top={"100px"}
        width={"100%"}
        // height={"100vh"}
        display={"grid"}
        zIndex={1}
        height={"calc(100% - 100px)"}

        overflow={"hidden"}
        gridTemplateColumns={{ xl: "repeat(13 ,1fr)", md: "repeat(10 ,1fr)", sm: "repeat(7 ,1fr)", base: "repeat(4 ,1fr)" }}
        gridTemplateRows={{ xl: "repeat(9 ,1fr)", base: "repeat(7 ,1fr)" }}
      >
        {Array.from({ length: 84 }, (_, index) => {
          return (
            <Image
              opacity={0}
              cursor={"pointer"}
              transition={".9s"}
              _hover={{
                opacity: 0.5
              }}
              key={index}
              src="https://images.pexels.com/photos/4067766/pexels-photo-4067766.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={"100%"}
              height={"100px"}
              objectFit={"cover"}
            />
          );
        })}
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
