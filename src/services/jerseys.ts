import { jerseysData } from "../utils/jerseys";

export interface JerseysType {
  id: string;
  name: string;
  year: string;
  wins: number;
  frequency: number;
  percentage: number;
}

export async function getAllJerseys() {
  try {
    return jerseysData;
  } catch (error) {
    return [];
  }
}
