import { useFetch } from "../hooks/useFetch";

import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

export default function Actors({ movieID }) {
  const { data, isPending, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=d1e74b3cbfd718ab444a8d8c776cb133`
  );

  const imageUrl = "https://image.tmdb.org/t/p/w1280";

  console.log(data);

  return (
    <Box>
      {isPending && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {data && (
        <Flex gap={8}>
          <Avatar
            src={`${imageUrl}${data.cast[0].profile_path}`}
            title={data.cast[0].name}
            size="lg"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          />
          <Avatar
            src={`${imageUrl}${data.cast[1].profile_path}`}
            title={data.cast[1].name}
            size="lg"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          />
          <Avatar
            src={`${imageUrl}${data.cast[2].profile_path}`}
            title={data.cast[2].name}
            size="lg"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          />
          <Avatar
            src={`${imageUrl}${data.cast[11].profile_path}`}
            title={data.cast[11].name}
            size="lg"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          />
        </Flex>
      )}
    </Box>
  );
}
