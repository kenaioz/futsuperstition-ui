import { rivalsData } from "../utils/rivals";

export interface RivalsType {
  id: string;
  name: string;
  wins: number;
  frequency: number;
}

export async function getAllRivals(): Promise<RivalsType[]> {
  try {
    return rivalsData;
  } catch (error) {
    return [];
  }
}
