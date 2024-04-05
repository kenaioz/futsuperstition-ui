import { competitionsData } from "../utils/competitions";

export interface CompetitionsType {
  id: string;
  name: string;
  category: string;
  wins: number;
  frequency: number;
}

export async function getAllCompetitions(): Promise<CompetitionsType[]> {
  try {
    return competitionsData;
  } catch (error) {
    return [];
  }
}
