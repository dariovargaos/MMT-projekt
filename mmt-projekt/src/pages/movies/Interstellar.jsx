import { useState } from "react";
import { Link } from "react-router-dom";

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
    <Flex bg={`url(${bgImage})`} bgSize="cover" h="100vh">
      <Flex alignItems="flex-end">
        <Box>
          <Heading as="h1">Interstellar</Heading>
          <Text>Watch movies online</Text>
          <Text>4 stars 4.5</Text>
          <Button>See IMDB</Button>
          <Flex gap={10}>
            <Link>
              <Image src={Bttf} maxH="300px" maxW="auto" />
            </Link>
            <Link>
              <Image src={Seven} maxH="300px" maxW="auto" />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Spacer />
      <Container minW="600px" backdropFilter="blur(2px)" centerContent>
        <Flex mt="10px" maxW="400px">
          <VStack>
            <Image src={Poster} maxH="300px" maxW="150px" />
            <Button onClick={() => openModal()}>See trailer</Button>
            <Divider />
            <Text color="white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              iusto impedit ducimus et tenetur laudantium molestias molestiae
              repellat voluptate iure aliquid praesentium placeat quod iste
              aspernatur, eius odit, minus distinctio.
            </Text>
            <Flex gap={8}>
              <Avatar src={Matt} />
              <Avatar src={Jessica} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
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
    </Flex>
  );
}
