import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,

  Stack,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../utils/Bipin.png";
const Links = [
  { title: "Home", id: "Home" },
  { title: "About", id: "About" },
  { title: "Skills", id: "Skills" },
  { title: "Projects", id: "Projects" },
  { title: "Contact", id: "Contact" },
];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="white"
    _hover={{
      textDecoration: "none",
      bg: "white",
      color: "black",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#347FCD" pos={"sticky"} top="0" zIndex={10}>
      <Box
        // bg="#347FCD"
        maxW={"6xl"}
        m="auto"
        px={5}
        py={1}
        color={"black"}
        fontWeight="600"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          //   border={"1px solid red"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            position={"center"}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            // border={"1px solid blue"}
            width={"full"}
            display="flex"
            justifyContent={[
              "center",
              "center",
              "space-between",
              "space-between",
              "space-between",
              "space-between",
            ]}
          >
            <Box>
              <Image src={Logo} alt="logo" width={"200px"} />
            </Box>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              cursor="pointer"
            >
              {Links.map((link, index) => (
                <Link
                  to={link.id}
                  color="white"
                  key={index}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  transition="all .2s ease-in-out"
                  _hover={{ transform: "scale(0.9)" }}
                >
                {link.title}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1-pt3hhNlb_95k2NZCbouelh2FPeDgXe5/view?usp=share_link"
                target={"_blank"}
              >
                Resume
              </a>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <Link to={link.id} color="white" key={index} cursor="pointer">
                  {link.title}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1-pt3hhNlb_95k2NZCbouelh2FPeDgXe5/view?usp=share_link"
                target={"_blank"}
              >
                Resume
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
