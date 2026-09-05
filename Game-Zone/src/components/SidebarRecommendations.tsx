import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import useSidebarGames from "../hooks/useSidebarGames";
import SidebarGameItem from "./SidebarGameItem";

const SidebarRecommendations = () => {
  const { popularGames, topRatedGames, isLoading, error } = useSidebarGames();

  const [showAllPopular, setShowAllPopular] = useState(false);
  const [showAllTopRated, setShowAllTopRated] = useState(false);

  if (error) return null;

  if (isLoading) {
    return (
      <Box marginTop={8}>
        <Text fontSize="lg" fontWeight="bold" marginBottom={2}>
          🎮 Game Zone
        </Text>

        <Text fontSize="sm" color="gray.500">
          Discover your next favorite game.
        </Text>
      </Box>
    );
  }

  const visiblePopularGames = showAllPopular
    ? popularGames
    : popularGames.slice(0, 5);

  const visibleTopRatedGames = showAllTopRated
    ? topRatedGames
    : topRatedGames.slice(0, 5);

  return (
    <Box marginTop={8}>
      <Text fontSize="lg" fontWeight="bold" marginBottom={2}>
        🎮 Game Zone
      </Text>

      <Text fontSize="sm" color="gray.500" lineHeight="1.6" marginBottom={7}>
        Discover your next favorite game.
      </Text>

      <Divider marginY={7} />

      <Heading fontSize="xl" marginBottom={3}>
        🔥 Popular Games
      </Heading>

      <List spacing={4}>
        {visiblePopularGames.map((game) => (
          <ListItem key={game.id}>
            <SidebarGameItem game={game} />
          </ListItem>
        ))}
      </List>

      {popularGames.length > 5 && (
        <Button
          variant="ghost"
          size="sm"
          color="gray.500"
          fontWeight="normal"
          paddingX={0}
          marginTop={3}
          _hover={{
            color: "gray.700",
            background: "transparent",
          }}
          onClick={() => setShowAllPopular((prev) => !prev)}
        >
          {showAllPopular ? "Show less" : "View more"}
        </Button>
      )}

      <Divider marginY={7} />

      <Heading fontSize="xl" marginBottom={3}>
        ⭐ Top Rated
      </Heading>

      <List spacing={4}>
        {visibleTopRatedGames.map((game) => (
          <ListItem key={game.id}>
            <SidebarGameItem game={game} />
          </ListItem>
        ))}
      </List>

      {topRatedGames.length > 5 && (
        <Button
          variant="ghost"
          size="sm"
          color="gray.500"
          fontWeight="normal"
          paddingX={0}
          marginTop={3}
          _hover={{
            color: "gray.700",
            background: "transparent",
          }}
          onClick={() => setShowAllTopRated((prev) => !prev)}
        >
          {showAllTopRated ? "Show less" : "View more"}
        </Button>
      )}
    </Box>
  );
};

export default SidebarRecommendations;
