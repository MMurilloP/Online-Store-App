import {
    Box,
    Flex,
    Heading,
    Stack,
    Wrap,
  } from '@chakra-ui/react';
  import { useSelector } from 'react-redux';
  import CartItem from '../CartItem/CartItem';
  import CartOrder from '../CartOrder/CartOrder'
  import { v4 as uuidv4 } from "uuid";

  
  const CartShopping = () => {
    const cartInfo = useSelector((state) => state.cart);
    const { cart } = cartInfo;
    
    return (
      <Wrap spacing='30px' justify='center' minHeight='100vh'>
          <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx='auto'
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align={{ lg: 'flex-start' }}
              spacing={{ base: '8', md: '16' }}>
              <Stack spacing={{ base: '8', md: '10' }} flex='2'>
                <Heading fontSize='2xl' fontWeight='extrabold'>
                  Tú Carrito:
                </Heading>
                <Stack spacing='6'>
                  {cart.map((cartItem) => (
                    <CartItem key={uuidv4()} cartItem={cartItem} />
                  ))}
                </Stack>
              </Stack>
              <Flex direction='column' align='center' flex='1'>
                <CartOrder />
              </Flex>
            </Stack>
          </Box>
      </Wrap>
    );
  };
  
  export default CartShopping;
  