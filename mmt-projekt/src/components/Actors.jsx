import { useFetch } from "../hooks/useFetch";

import { Avatar, Flex, Box } from "@chakra-ui/react";

export default function Actors() {
  const { data, isPending, error } = useFetch(
    "https://api.themoviedb.org/3/movie/157336/credits?api_key=d1e74b3cbfd718ab444a8d8c776cb133"
  );

  const imageUrl = "https://image.tmdb.org/t/p/w1280";

  console.log(data);

  return (
    <Box>
      {data && (
        <Flex gap={8}>
          <Avatar
            src={`${imageUrl}${data.cast[0].profile_path}`}
            title={data.cast[0].name}
            size="lg"
          />
          <Avatar
            src={`${imageUrl}${data.cast[1].profile_path}`}
            title={data.cast[1].name}
            size="lg"
          />
          <Avatar
            src={`${imageUrl}${data.cast[2].profile_path}`}
            title={data.cast[2].name}
            size="lg"
          />
          <Avatar
            src={`${imageUrl}${data.cast[11].profile_path}`}
            title={data.cast[11].name}
            size="lg"
          />
        </Flex>
      )}
    </Box>
  );
}
