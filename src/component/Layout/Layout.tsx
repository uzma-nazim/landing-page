import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";
interface LayoutProps {
  children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dummyProifle = [
    "https://i.pinimg.com/236x/9f/74/53/9f74535608abc523efe3eb37a9a30a54.jpg",
    "https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg",
    "https://png.pngtree.com/background/20230530/original/pngtree-man-looking-for-a-good-mens-beauty-look-picture-image_2791625.jpg",
    "https://images.unsplash.com/photo-1621834482744-4b5153533154?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1599842057874-37393e9342df?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1605951654320-a55377b36744?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFtZXJpY2FuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    "https://dp.profilepics.in/profile_pictures/american-girls/american-girls-dp-70.jpg",
    "https://dp.profilepics.in/profile_pictures/american-girls/american-girls-dp-70.jpg",
    "https://i.pinimg.com/originals/9f/74/53/9f74535608abc523efe3eb37a9a30a54.jpg",
    "https://s3-media0.fl.yelpcdn.com/bphoto/xOwyfEVedmCDhKZCoDa7LA/348s.jpg",
    "https://qualityrrc.com/wp-content/uploads/2018/01/DSC09752-scaled-e1672780007920.jpg",
    "https://lirp.cdn-website.com/5a48391e/dms3rep/multi/opt/IMG_0170-5e662bdb-640w.jpeg",
    "https://i.pinimg.com/736x/2c/5b/7b/2c5b7baca918f330e9e024eb2f69f849.jpg",
    "https://lirp.cdn-website.com/5a48391e/dms3rep/multi/opt/IMG_0935-0efb0c41-640w.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1wkKhhCPLXl9rxLXfHFOY1qLQLGBgT_Hv8hSGoawxm9mJUpXPqD4s8W7e51bWeclvhw&usqp=CAU",
  ]
  const randomeNumber = () => {
    let randomNumber = Math.floor(Math.random() * (dummyProifle.length - 0) + 0);
    return randomNumber

  }
  const [indexProfile, setindex] = useState<string>(dummyProifle[randomeNumber()])
  const [prevIndex, setprevIndex] = useState<string>(dummyProifle[randomeNumber()])

  const handleMouseOver = () => {
    let randomNumber = randomeNumber();
console.log(prevIndex);

    // setindex((prv: string) => { setprevIndex(prv); return dummyProifle[randomNumber] })
    setindex((prv: string) => { setprevIndex(prv); return dummyProifle[randomNumber] })
  }

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
        gridTemplateColumns={{ xl: "repeat(13 ,1fr)", md: "repeat(10 ,1fr)", sm: "repeat(7 ,1fr)", base: "repeat(4 ,1fr)" }}
        gridTemplateRows={{ xl: "repeat(9 ,1fr)", base: "repeat(7 ,1fr)" }}
      >
        {Array.from({ length: 84 }, (_, index) => {
          return (
            <Image
              onMouseEnter={handleMouseOver}
              // onMouseLeave={handleMouseOver}
              opacity={0}
              cursor={"pointer"}
              transition={".5s"}
              _hover={{
                opacity: 0.5
              }}
              key={index}
              src={indexProfile}
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
