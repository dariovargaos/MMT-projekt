import { useFetch } from "../hooks/useFetch";

import { Box } from "@chakra-ui/react";

export default function Actors() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/movie/157336/credits?api_key=d1e74b3cbfd718ab444a8d8c776cb133"
  );

  return <Box></Box>;
}
