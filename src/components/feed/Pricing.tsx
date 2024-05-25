import {
  Center,
  useColorModeValue,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface PricingProps {
  title: string;
  price: string;
  features: string[];
}

export function Pricing({ title, price, features }: PricingProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={"green.50"}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            {title}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>$</Text>
            <Text fontSize={"6xl"} fontWeight={800}>
              {price}
            </Text>
            <Text color={"gray.500"}>/month</Text>
          </Stack>
        </Stack>

        <Box bg={"gray.50"} px={6} py={10}>
          <List spacing={3}>
            {features.map((feature) => (
              <ListItem>
                <ListIcon as={FaCheck} color="green.400" />
                {feature}
              </ListItem>
            ))}
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
