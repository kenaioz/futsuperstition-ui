import { localsJerseysData } from "../utils/localsJerseys";
import { rivalsCompetitionsData } from "../utils/rivalsCompetition";

export interface LocalsJerseysType {
  id: string;
  jersey: string;
  local: {
    name: string;
    category: string;
  };
  wins: number;
  frequency: number;
  percentage: number;
}

export interface RivalsCompetitionType {
  id: string;
  team: string;
  competition: {
    name: string;
    category: string;
  };
  wins: number;
  frequency: number;
  percentage: number;
}

export async function getLocalsJerseysComp(): Promise<LocalsJerseysType[]> {
  try {
    return localsJerseysData;
  } catch (error) {
    return [];
  }
}

export async function getRivalsCompetitionsComp(): Promise<
  RivalsCompetitionType[]
> {
  try {
    return rivalsCompetitionsData;
  } catch (error) {
    return [];
  }
}
