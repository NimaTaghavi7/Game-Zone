import { HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const SidebarGameItem = ({ game }: Props) => {
  return (
    <HStack spacing={3} width="100%">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        boxSize="40px"
        borderRadius="6px"
        objectFit="cover"
        flexShrink={0}
      />

      <Text
        fontSize="sm"
        fontWeight="medium"
        noOfLines={2}
      >
        {game.name}
      </Text>
    </HStack>
  );
};

export default SidebarGameItem;