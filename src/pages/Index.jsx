import React from "react";
import { Box, Heading, Text, Image, Stack, SimpleGrid, Button, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const menuItems = [
  {
    name: "Jollof Rice",
    description: "A classic Nigerian dish made with long-grain rice, tomatoes, and spices.",
    image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGpvbGxvZiUyMHJpY2V8ZW58MHx8fHwxNzEyNDA2Mjg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Egusi Soup",
    description: "A hearty soup made with ground melon seeds, vegetables, and meat or fish.",
    image: "https://images.unsplash.com/photo-1478749485505-2a903a729c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGVndXNpJTIwc291cHxlbnwwfHx8fDE3MTI0MDYyODh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Suya",
    description: "Spicy grilled meat skewers, popular as a street food in Nigeria.",
    image: "https://images.unsplash.com/photo-1589707181684-24a34853641d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHN1eWF8ZW58MHx8fHwxNzEyNDA2Mjg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Pounded Yam",
    description: "A traditional Nigerian dish made from boiled and pounded yam.",
    image: "https://images.unsplash.com/photo-1614725363900-538db555d7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHBvdW5kZWQlMjB5YW18ZW58MHx8fHwxNzEyNDA2Mjg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Box backgroundImage="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMjQwNjI5MHww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" py={40} textAlign="center" color="white">
        <Heading as="h1" size="2xl" mb={4}>
          Taste of Nigeria
        </Heading>
        <Text fontSize="xl">Authentic Nigerian cuisine, delivered to your doorstep.</Text>
      </Box>

      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Our Menu
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={10} maxW="7xl" mx="auto">
          {menuItems.map((item, index) => (
            <Box key={index} bg={useColorModeValue("gray.100", "gray.700")} p={6} rounded="md">
              <Image src={item.image} alt={item.name} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {item.name}
              </Heading>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box bg={useColorModeValue("gray.100", "gray.700")} py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>
          Order Now
        </Heading>
        <Button colorScheme="green" size="lg">
          Place an Order
        </Button>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>
          Follow Us
        </Heading>
        <Stack direction="row" spacing={6} justifyContent="center">
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaFacebook size={30} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
