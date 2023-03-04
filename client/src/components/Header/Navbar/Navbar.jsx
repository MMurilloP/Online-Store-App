import React from "react";
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
import { CgShoppingCart } from "react-icons/cg";

function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("green.100", "green.900")} px={5}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onclick : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Icon
                as={BsFillEmojiSmileUpsideDownFill}
                h={10}
                w={10}
                color="black.100"
              />
              <Text fontWeight="extrabold" px={5} ml={2}>
                Tienda Online
              </Text>
            </Flex>
          </Link>
          <HStack>
            <Link
              as={ReactLink}
              to="/product"
              px={2}
              py={2}
              rounded="md"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("green.200", "green.700"),
              }}
            >
              <Text px={5} ml={2}>
                Productos
              </Text>
            </Link>
          </HStack>
          <HStack>
            <Link
              as={ReactLink}
              to="/CarritodeCompras"
              px={2}
              py={2}
              rounded="md"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("green.200", "green.700"),
              }}
            >
              <Text px={5} ml={2}>
                Carrito de compras
                <Icon as={CgShoppingCart} h={10} w={10} color="black.100" />
              </Text>
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Link
            as={ReactLink}
            to="/product"
            px={2}
            py={2}
            rounded="md"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("green.200", "green.700"),
            }}
          >
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf="center"
              h={8}
              w={8}
              style={{ color: colorMode === "light" ? "black" : "white" }}
              onClick={() => toggleColorMode()}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
