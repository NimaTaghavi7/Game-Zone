import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";

import useSidebarGames from "../hooks/useSidebarGames";
import SidebarGameItem from "./SidebarGameItem";

const SidebarRecommendations = () => {
  const {
    popularGames,
    topRatedGames,
    isLoading,
    error,
  } = useSidebarGames();

  if (error) {
    return null;
  }

  if (isLoading) {
    return (
      <Box marginTop={8}>
        <Text fontSize="lg" fontWeight="bold" marginBottom={3}>
          🎮 Game Zone
        </Text>

        <Text
          fontSize="sm"
          color="gray.500"
          marginBottom={6}
        >
          Discover your next favorite game.
        </Text>

        <Heading fontSize="xl" marginBottom={3}>
          🔥 Popular Games
        </Heading>

        <List spacing={4}>
          {Array.from({ length: 10 }).map((_, index) => (
            <ListItem key={index}>
              <Skeleton height="40px" borderRadius="6px" />
            </ListItem>
          ))}
        </List>

        <Divider marginY={6} />

        <Heading fontSize="xl" marginBottom={3}>
          ⭐ Top Rated
        </Heading>

        <List spacing={4}>
          {Array.from({ length: 10 }).map((_, index) => (
            <ListItem key={index}>
              <Skeleton height="40px" borderRadius="6px" />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  return (
    <Box marginTop={8}>
      <Text
        fontSize="lg"
        fontWeight="bold"
        marginBottom={2}
      >
        🎮 Game Zone
      </Text>

      <Text
        fontSize="sm"
        color="gray.500"
        marginBottom={7}
      >
        Discover your next favorite game.
      </Text>

      <Heading
        fontSize="xl"
        marginBottom={3}
      >
        🔥 Popular Games
      </Heading>

      <List spacing={4}>
        {popularGames.map((game) => (
          <ListItem key={game.id}>
            <SidebarGameItem game={game} />
          </ListItem>
        ))}
      </List>

      <Divider marginY={7} />

      <Heading
        fontSize="xl"
        marginBottom={3}
      >
        ⭐ Top Rated
      </Heading>

      <List spacing={4}>
        {topRatedGames.map((game) => (
          <ListItem key={game.id}>
            <SidebarGameItem game={game} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarRecommendations;