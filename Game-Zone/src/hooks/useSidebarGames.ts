import { useMemo } from "react";
import useData from "./useData";
import type { Game } from "./useGames";

const getRandomPage = () => Math.floor(Math.random() * 5) + 1;

const useSidebarGames = () => {
  const popularPage = useMemo(() => getRandomPage(), []);
  const topRatedPage = useMemo(() => getRandomPage(), []);
  const recommendedPage = useMemo(() => getRandomPage(), []);

  const {
    data: popularData,
    error: popularError,
    isLoading: popularLoading,
  } = useData<Game>(
    "/games",
    {
      params: {
        page_size: 30,
        ordering: "-rating",
        page: popularPage,
      },
    },
    [popularPage],
  );

  const {
    data: topRatedData,
    error: topRatedError,
    isLoading: topRatedLoading,
  } = useData<Game>(
    "/games",
    {
      params: {
        page_size: 30,
        ordering: "-metacritic",
        page: topRatedPage,
      },
    },
    [topRatedPage],
  );

  const {
    data: recommendedData,
    error: recommendedError,
    isLoading: recommendedLoading,
  } = useData<Game>(
    "/games",
    {
      params: {
        page_size: 30,
        ordering: "-added",
        page: recommendedPage,
      },
    },
    [recommendedPage],
  );

  const popularGames = useMemo(() => {
    return [...popularData]
      .filter(
        (game) =>
          game.background_image &&
          game.name,
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, [popularData]);

  const topRatedGames = useMemo(() => {
    const popularIds = new Set(
      popularGames.map((game) => game.id),
    );

    return [...topRatedData]
      .filter(
        (game) =>
          game.background_image &&
          game.name &&
          game.metacritic !== null &&
          game.metacritic !== undefined &&
          !popularIds.has(game.id),
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, [topRatedData, popularGames]);

  const recommendedGames = useMemo(() => {
    const excludedIds = new Set([
      ...popularGames.map((game) => game.id),
      ...topRatedGames.map((game) => game.id),
    ]);

    return [...recommendedData]
      .filter(
        (game) =>
          game.background_image &&
          game.name &&
          !excludedIds.has(game.id),
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, [recommendedData, popularGames, topRatedGames]);

  return {
    popularGames,
    topRatedGames,
    recommendedGames,
    isLoading:
      popularLoading ||
      topRatedLoading ||
      recommendedLoading,
    error:
      popularError ||
      topRatedError ||
      recommendedError,
  };
};

export default useSidebarGames;