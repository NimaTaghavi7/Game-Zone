import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import type { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const MobileGenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genre"}
      </MenuButton>

      <MenuList>
        {data.map((genre) => (
          <MenuItem key={genre.id} onClick={() => onSelectGenre(genre)}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MobileGenreSelector;
