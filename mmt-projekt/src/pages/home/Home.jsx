import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
} from "@chakra-ui/react";

//images
import Dario from "../../assets/dario.png";
import Matej from "../../assets/bernatovic.png";
import bgImage from "../../assets/bg.jpg";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const openModal = (picture) => {
    setSelectedPicture(picture);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPicture(null), setShowModal(false);
  };
  return (
    <Box bg={`url(${bgImage})`} h="100vh" bgSize="cover">
      <Box h="100vh">
        <Box
          display="flex"
          gap="20px"
          justifyContent="center"
          alignItems="center"
          h="100vh"
        >
          <Card bg="rgba(0, 0, 0, 0.8)" color="white" size="lg">
            <CardHeader display="flex" alignItems="center" gap="20px">
              <Avatar
                src={Dario}
                alt="Dario"
                size="xl"
                _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onClick={() => openModal(Dario)}
              />
              <Text>Information about Dario</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Text>Name: Dario</Text>
              <Text>Last name: Varga</Text>
              <Text>
                Education:{" "}
                <Link to="http://os-ifilipovica-os.skole.hr/">
                  OŠ Ivana Filipovića
                </Link>
                ,
                <Link to="http://ss-tehnicka-rboskovica-os.skole.hr/">
                  Prirodoslovna gimnazija Ruđera Boškovića
                </Link>
                ,<Link to="https://www.ferit.unios.hr/">FERIT Osijek</Link>
              </Text>
              <Text>
                Birthplace: <Link to="https://www.osijek.hr/">Osijek</Link>
              </Text>
              <Text>
                Top Movies: <Link>Interstellar</Link>, <Link>Se7en</Link>,
                <Link>Back to the Future</Link>
              </Text>
            </CardBody>
          </Card>
          <Card bg="rgba(0, 0, 0, 0.8)" color="white" size="lg">
            <CardHeader display="flex" alignItems="center" gap="20px">
              <Avatar
                src={Matej}
                alt="Matej"
                size="xl"
                _hover={{
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onClick={() => openModal(Matej)}
              />
              <Text>Information about Matej</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Text>Name: Matej</Text>
              <Text>Last name: Bernatović</Text>
              <Text>
                Education:{" "}
                <Link to="https://www.facebook.com/Osnovna-%C5%A1kola-Ora%C5%A1je-933131760132073/">
                  OŠ Orašje
                </Link>
                ,
                <Link to="https://www.facebook.com/scframartinnedic/">
                  ŠC Fra Martina Nedića
                </Link>
                ,<Link to="https://www.ferit.unios.hr/">FERIT Osijek</Link>
              </Text>
              <Text>
                Birthplace:{" "}
                <Link to="https://grad-vinkovci.hr/hr">Vinkovci</Link>
              </Text>
              <Text>
                Top Movies: <Link>Pineapple Express</Link>,
                <Link>Star Wars: The Phantom Menace</Link>,
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent bg="rgba(0, 0, 0, 0.8)">
            <ModalCloseButton color="white" />
            <ModalBody>
              <Image src={selectedPicture} />
            </ModalBody>
          </ModalContent>
        </Modal>
        <Link to="/interstellar">INTERSTELLAR</Link>
      </Box>
    </Box>
  );
}
