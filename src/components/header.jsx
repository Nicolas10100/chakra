// src/components/Header.js
import { Flex, Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      p="4"
      bgImage="url('https://www.seoclerk.com/pics/want10687-14TZRq1388844023.jpg')"
      bgSize="cover"
      bgPosition="center"
      align="center"
      justify="center"
      w="100%" // Ocupa todo el ancho de la pantalla
      h="50vh" // Ajusta la altura según tus necesidades
    >
      <Box
        as="button"
        bg="teal.700"
        color="white"
        p="2"
        borderRadius="md"
        _hover={{ bg: 'teal.600' }}
        mr="4"
      >
        Ver Detalles
      </Box>

      <Box
        as="button"
        bg="teal.700"
        color="white"
        p="2"
        borderRadius="md"
        _hover={{ bg: 'teal.600' }}
      >
        Ver Video
      </Box>
    </Flex>
  );
};

export default Header;
