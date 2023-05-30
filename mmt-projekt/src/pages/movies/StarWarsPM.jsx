import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  VStack,
  Divider,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";

//components
import Actors from "../../components/Actors";

//images
import Bttf from "../../assets/backtothefuture/poster.jpg";
import Seven from "../../assets/se7en/poster.jpg";
export default function StarWarsPM() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/search/movie?api_key=d1e74b3cbfd718ab444a8d8c776cb133&query=Star+wars+the+phantom+menace"
  );

  const imageUrl = "https://image.tmdb.org/t/p/w1280";

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Box>
      {data && (
        <Grid
          templateColumns="repeat(6, 1fr)"
          bg={`url(${imageUrl}${data.results[0].backdrop_path})`}
          bgSize="cover"
        >
          <GridItem colSpan={{ base: 6, lg: 4, xl: 4 }} minH={{ lg: "100vh" }}>
            <Flex p="10px" direction="column" gap={4} align="start">
              <Heading as="h1" color="white" size="3xl" letterSpacing="3px">
                {data.results[0].title}
              </Heading>
              <Text color="white">
                Release date: {data.results[0].release_date}
              </Text>
              <Text color="white">
                Audience score: {data.results[0].vote_average}/10 (based on{" "}
                {data.results[0].vote_count} votes)
              </Text>
              <Button
                color="white"
                variant="outline"
                _hover={{ bg: "gray.700" }}
              >
                See IMDB
              </Button>
              <Text color="white">See other Matej's favourite movies</Text>
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
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, lg: 2, xl: 2 }}>
            <Container backdropFilter="blur(3px)" minH="100vh">
              <Flex justify="flex-end" p="10px" color="white">
                <NavLink to="/" _hover={{ textDecoration: "underline" }}>
                  Home
                </NavLink>
              </Flex>
              <Flex maxW="600px" justifyContent="center" alignItems="center">
                <VStack gap={4}>
                  <Image
                    src={`${imageUrl}${data.results[0].poster_path}`}
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
                  <Text color="white">{data.results[0].overview}</Text>
                  <Text color="white">Actors:</Text>
                  <Actors movieID={data.results[0].id} />
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
                  src="https://www.youtube.com/embed/bD7bpG-zDJQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Grid>
      )}
    </Box>
  );
}
