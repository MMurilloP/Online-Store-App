import React from "react";
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  HStack,
  Stack,
  Link,
  useToast,
} from "@chakra-ui/react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addCartItem} from '../../../redux/actions/cartActions'
import ProductDetails from "./ProductDetail/ProductDetail"

function ProducstCard({ product }) {
  const [rating] = useState(product.rating);
  const iconSize = "md";

  const dispatch = useDispatch();
  const toast = useToast();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description: 'El producto ya está en tu carrito',
        status: 'error',
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({ description: 'Producto añadido a tu carrito.', status: 'success', isClosable: true });
    }
  };

  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="450px"
      border="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image  boxSize='250px' objectFit='cover' src={product.image} alt={product.name} roundedTop="lg" />
    
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactLink}
          to={`/product${product._id}`}
          pt="2"
          p={3}
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex>
        <HStack spacing="2px">
          <StarIcon size={iconSize} w="14px" color="orange.500" />
          <StarIcon
            size={iconSize}
            w="14px"
            color={rating >= 2 ? "orange.500" : "gray.200"}
          />
          <StarIcon
            size={iconSize}
            w="14px"
            color={rating >= 3 ? "orange.500" : "gray.200"}
          />
          <StarIcon
            size={iconSize}
            w="14px"
            color={rating >= 4 ? "orange.500" : "gray.200"}
          />
          <StarIcon
            size={iconSize}
            w="14px"
            color={rating >= 5 ? "orange.500" : "gray.200"}
          />
        </HStack>
      </Flex>

      <Flex justify="space-between">
        <Box
          fontSize="2xl"
          m={2}
          p={2}
          color={useColorModeValue("gray.800", "white")}
        >
          <Box as="span" color={"gray.600"} fontSize="lg"></Box>
          {product.price}€ /kg 
        </Box>
        <Tooltip
          label="Add to card"
          bg="white"
          placement="top"
          color="gray.800"
        >
          <Button variant="ghost" display="flex" onClick={()=> addItem(product._id)}>
            <Icon
              as={TbShoppingCartPlus}
              mt= {7}
              h={7}
              w={7}
              alignSelf="center"
            />
          </Button>
        </Tooltip>
      </Flex>
      <ProductDetails product={product} />

    </Stack>
  );
}

export default ProducstCard;
