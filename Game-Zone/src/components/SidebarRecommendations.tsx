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

type OpenSection =
  | "popular"
  | "topRated"
  | "recommended"
  | null;

const SidebarRecommendations = () => {
  const {
    popularGames,
    topRatedGames,
    recommendedGames,
    isLoading,
    error,
  } = useSidebarGames();

  const [openSection, setOpenSection] =
    useState<OpenSection>(null);

  if (error) return null;

  if (isLoading) {
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
        >
          Discover your next favorite game.
        </Text>
      </Box>
    );
  }

  const visiblePopularGames =
    openSection === "popular"
      ? popularGames
      : popularGames.slice(0, 5);

  const visibleTopRatedGames =
    openSection === "topRated"
      ? topRatedGames
      : topRatedGames.slice(0, 5);

  const visibleRecommendedGames =
    openSection === "recommended"
      ? recommendedGames
      : recommendedGames.slice(0, 5);

  const handleToggle = (
    section: Exclude<OpenSection, null>,
  ) => {
    setOpenSection((current) =>
      current === section ? null : section,
    );
  };

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
        lineHeight="1.6"
        marginBottom={7}
      >
        Discover your next favorite game.
      </Text>

      <Divider marginY={7} />

      {/* Popular Games */}
      <Heading
        fontSize="xl"
        marginBottom={3}
      >
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
          onClick={() => handleToggle("popular")}
        >
          {openSection === "popular"
            ? "Show less"
            : "View more"}
        </Button>
      )}

      <Divider marginY={7} />

      {/* Top Rated */}
      <Heading
        fontSize="xl"
        marginBottom={3}
      >
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
          onClick={() => handleToggle("topRated")}
        >
          {openSection === "topRated"
            ? "Show less"
            : "View more"}
        </Button>
      )}

      <Divider marginY={7} />

      
      <Heading
        fontSize="xl"
        marginBottom={3}
      >
        🎯 Recommended Games
      </Heading>

      <List spacing={4}>
        {visibleRecommendedGames.map((game) => (
          <ListItem key={game.id}>
            <SidebarGameItem game={game} />
          </ListItem>
        ))}
      </List>

      {recommendedGames.length > 5 && (
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
          onClick={() =>
            handleToggle("recommended")
          }
        >
          {openSection === "recommended"
            ? "Show less"
            : "View more"}
        </Button>
      )}
    </Box>
  );
};

export default SidebarRecommendations;