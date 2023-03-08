import React, { useState } from "react";
import {
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Wrap,
  CardBody,
  Card,
  Stack,
  Heading,
} from "@chakra-ui/react";

function ProductDetails({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button size="sm" onClick={() => setIsOpen(true)}>
        Ver detalles
      </Button>
      <Wrap
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <Card maxW="2xl">
              <CardBody>
                <Image
                  src={product.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" >
                  <Heading size="md">{product.name}</Heading>
                  <Text fontSize="xl">Descripción: {product.description}</Text>
                  <Text fontSize="xl">Precio: {product.price}€ /kg</Text>
                  <Text fontSize="xl">
                    Proveedor: {product.provider.nombre},
                  </Text>
                  <Text fontSize="xl">CIF: {product.provider.cif}</Text>
                  <Text fontSize="xl">
                    Dirección: {product.provider.direccion}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </ModalContent>
        </Modal>
      </Wrap>
    </>
  );
}

export default ProductDetails;
