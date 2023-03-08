import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

const CartOrder = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;
  const navigate = useNavigate;

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate("/checkout");
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" w="full">
      <Heading size="md">Tú Pédido:</Heading>
      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="xl" fontWeight="extrabold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {subtotal} €
          </Text>
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to="/checkout"
        colorScheme="orange"
        size="lg"
        fontSize="md"
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        Paypal
      </Button>
    </Stack>
  );
};

export default CartOrder;
