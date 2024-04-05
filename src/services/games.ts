import { gamesData } from "../utils/games";

export interface GamesType {
  id: string;
  homeTeam: {
    name: string;
    goals: number;
  };
  awayTeam: {
    name: string;
    goals: number;
  };
  date: string;
  stadium: string;
  jersey: {
    name: string;
    year: string;
  };
  competition: {
    id: string;
    name: string;
  };
  local: string;
}

export async function getAllGames(): Promise<GamesType[]> {
  try {
    return gamesData;
  } catch (error) {
    return [];
  }
}
