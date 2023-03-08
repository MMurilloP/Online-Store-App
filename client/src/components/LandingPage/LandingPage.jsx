import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { GiFruitBowl } from "react-icons/gi";
  import { Link as ReactLink } from "react-router-dom";


const LandingPage = () => (
    <Box  maxW="8xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          borderRadius='3xl'
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="3xl" color={useColorModeValue('orange.500', 'orange.300')}>
              Canasta de Frutas

              </Heading>
              <Heading size="xl" fontWeight="normal">
                Tú tienda de frutas online
              </Heading>
            </Stack>
            <HStack spacing="3">
            <Icon as={GiFruitBowl} h={12} w={12} color="orange.400" />
              <Link as={ReactLink} to='/products' color={useColorModeValue('orange.500', 'orange.300')} fontWeight="bold" fontSize="lg">
                Entra
              </Link>
              <Icon color={useColorModeValue('orange.500', 'orange.300')} as={FaArrowRight} />
            </HStack>
            
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="550px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
          <Image
            display={{ base: 'none', sm: 'initial' }}
            src="https://images.pexels.com/photos/4473360/pexels-photo-4473360.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  )

  export default LandingPage