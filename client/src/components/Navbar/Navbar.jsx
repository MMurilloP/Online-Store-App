import React from "react";
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Navbar.css'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

const links = [
  { linkName: "Productos", path: "/products" },
  { linkName: <Icon as={GiShoppingCart} boxSize={7} />, path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="Box-container"  px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon
                as={BsFillEmojiSmileUpsideDownFill}
                h={7}
                w={7}
                color="orange.400"
              />
              <Text fontWeight="extrabold" p={3}>
                Tienda Online
              </Text>
            </Flex>
          </Link>
          <HStack as="nav" spacing={10} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={uuidv4()} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <NavLink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf="center"
              onClick={() => toggleColorMode()}
            />
          </NavLink>
          {/* <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            Login
          </Button>
          <Button
            as={ReactLink}
            to="/registration"
            m={2}
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            _hover={{ bg: "teal.400" }}
            bg="teal.500"
            color="white"
          >
            Registrate
          </Button> */}
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={uuidv4()} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            {/* <NavLink key={uuid()} path="/registration">
              Registrate
            </NavLink> */}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
