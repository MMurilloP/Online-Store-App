import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { products } from "../../../products";


function ProducstCard({ product }) {
    const [rating, setRating] = useState(3);
    const iconSize = "md";
    const stars = [1, 2, 3, 4, 5];
  
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
        {/* {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300'/>} Si hay stock circulo verde
          {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300'/>} si no hay stock circulo naranja */}
        <Image src={product.image} alt={product.name} roundedTop="lg" />
        {/* <Box flex='1' maxH='S' alignItems='baseline'>
          {product.stock <= 0 && (
              <Badge rounded='full' px='2' fontSize='0.8' colorScheme='red'>
                  Sin stock
              </Badge>
          )}
          {product.isNew <= 0 && (
              <Badge rounded='full' px='2' fontSize='0.8' colorScheme='green'>
                  Nuevo
              </Badge>
          )}
        </Box> */}
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Link as={ReactLink} to={`/product${product._id}`} pt="2" p = {3} cursor="pointer">
            <Box fontSize="2xl" fontWeight="semibold" lineHeight="tight">
              {product.name}
            </Box>
          </Link>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          {stars.map((star) => (
            <StarIcon m={2}
              key={star}
              size={iconSize}
              w="14px"
              color={rating >= star ? "orange.500" : "gray.200"}
            />
          ))}
        </Flex>
      <Flex justify='space-between'>
        <Box fontSize='2xl' m={2} p={2} color= { useColorModeValue('gray.800', 'white')}>
            <Box as='span' color = {'gray.600'} fontSize='lg'>
                € 
            </Box>
            {product.price}

        </Box>
        <Tooltip label='Add to card' bg='white' placement="top" color='gray.800' fontSize='1.2rem'>
            <Button variant = 'ghost' display='flex' disabled= {product.stock <= 0}>
                <Icon as= {TbShoppingCartPlus} mt={2} h= {7} w= {7} alignSelf='center'/>
            </Button>
        </Tooltip>

      </Flex>
    </Stack>
  );
}

export default ProducstCard;
