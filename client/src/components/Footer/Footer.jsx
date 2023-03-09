import {
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

const Footer = () => (
  <Box w="100%">
    <Container as="footer" role="contentinfo" maxW="8xl">
      <Divider mt="7" />
      <Stack
        py="4"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/manuel-murillo-peira-37712120a/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://github.com/MMurilloP?tab=repositories"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Flex alignItems="center">
            <Icon as={GiFruitBowl} h={8} w={8} color="orange.400" />
            <Text fontSize="1xl" pl="5" fontWeight="extrabold">
            Canasta de Frutas
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
