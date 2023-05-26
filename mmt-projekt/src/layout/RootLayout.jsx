import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import backgroundImage from "../assets/bg.jpg";

export default function RootOutlet() {
  return (
    <Box bg={`url(${backgroundImage})`} h="100vh" bgSize="cover">
      <Outlet />
    </Box>
  );
}
