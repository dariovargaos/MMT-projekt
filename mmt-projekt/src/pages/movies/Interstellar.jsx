import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Spacer,
  Image,
  VStack,
  Divider,
  Container,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";

//images
import bgImage from "../../assets/interstellar/interstellarbg3.jpg";
import Poster from "../../assets/interstellar/poster.jpg";
import Matt from "../../assets/interstellar/matt.jpg";
import Jessica from "../../assets/interstellar/Jessica.jpg";
import Bttf from "../../assets/backtothefuture/poster.jpg";
import Seven from "../../assets/se7en/poster.jpg";
export default function Interstellar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      bg={`url(${bgImage})`}
      bgSize="cover"
    >
      <GridItem colSpan={{ base: 6, lg: 4, xl: 4 }} minH={{ lg: "100vh" }}>
        <Flex minW="400px" p="10px">
          <VStack gap={3}>
            <Heading as="h1" color="white" size="3xl" letterSpacing="5px">
              Interstellar
            </Heading>
            <Text color="white">4 stars 4.5</Text>
            <Button color="white" variant="outline" _hover={{ bg: "gray.700" }}>
              See IMDB
            </Button>
            <Text color="white">See other Dario's favourite movies</Text>
            <Flex gap={10}>
              <Link>
                <Image
                  src={Bttf}
                  maxH="200px"
                  maxW="auto"
                  borderRadius="5px"
                  boxShadow="-4px 4px 5px 0 black"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  }}
                />
              </Link>
              <Link>
                <Image
                  src={Seven}
                  maxH="200px"
                  maxW="auto"
                  borderRadius="5px"
                  boxShadow="-4px 4px 5px 0 black"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "0.3s",
                  }}
                />
              </Link>
            </Flex>
          </VStack>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 6, lg: 2, xl: 2 }}>
        <Container backdropFilter="blur(2px)">
          <Flex justify="flex-end" p="10px" color="white">
            <NavLink to="/" _hover={{ textDecoration: "underline" }}>
              Home
            </NavLink>
          </Flex>

          <Flex
            maxH="100vh"
            maxW="600px"
            justifyContent="center"
            alignItems="center"
          >
            <VStack gap={4}>
              <Image
                src={Poster}
                maxH="300px"
                maxW="auto"
                borderRadius="5px"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "0.3s",
                }}
              />
              <Button
                onClick={() => openModal()}
                color="white"
                variant="outline"
                _hover={{ bg: "gray.700" }}
              >
                See trailer
              </Button>
              <Divider />
              <Text color="white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                iusto impedit ducimus et tenetur laudantium molestias molestiae
                repellat voluptate iure aliquid praesentium placeat quod iste
                aspernatur, eius odit, minus distinctio.
              </Text>
              <Flex gap={8}>
                <Avatar title="Matt Damon" src={Matt} size="lg" />
                <Avatar src={Jessica} size="lg" />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </GridItem>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        isCentered
        closeOnOverlayClick={false}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalCloseButton color="white" />
          <ModalBody>
            <iframe
              width="510"
              height="315"
              src="https://www.youtube.com/embed/zSWdZVtXT7E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
  );
}
