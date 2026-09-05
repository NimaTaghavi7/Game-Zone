import { useMemo } from "react";
import useData from "./useData";
import type { Game } from "./useGames";

const useSidebarGames = () => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        page_size: 40,
        ordering: "-rating",
      },
    },
    [],
  );

  const games = useMemo(() => {
    const validGames = data.filter(
      (game) => game.background_image && game.name,
    );

    const shuffled = [...validGames].sort(() => Math.random() - 0.5);

    return shuffled;
  }, [data]);

  const popularGames = games.slice(0, 10);

  const topRatedGames = [...data]
    .filter(
      (game) =>
        game.background_image &&
        game.name &&
        game.metacritic !== null &&
        game.metacritic !== undefined,
    )
    .sort((a, b) => b.metacritic - a.metacritic)
    .slice(0, 10);

  return {
    popularGames,
    topRatedGames,
    error,
    isLoading,
  };
};

export default useSidebarGames;