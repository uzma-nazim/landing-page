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
        display={"grid"}
        zIndex={1}
        height={"calc(100% - 100px)"}

        overflow={"hidden"}
        gridTemplateColumns={{ xl: "repeat(10 ,1fr)", md: "repeat(10 ,1fr)", sm: "repeat(7 ,1fr)", base: "repeat(4 ,1fr)" }}
        gridTemplateRows={{ xl: "repeat(9 ,1fr)", base: "repeat(7 ,1fr)" }}
      >
        {Array.from({ length: 50 }, (_, index) => {
          return (
            <Image
            
              opacity={1}
              // cursor={"pointer"}
              transition={".9s"}
              filter={"blur(1px)"}
              _hover={{
                opacity: 0.5
              }}
              key={index}
              src={`/Images/${index+1}.png`}
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
