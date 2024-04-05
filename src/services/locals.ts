import { localsData } from "../utils/locals";

export interface LocalsType {
  id: string;
  name: string;
  category: string;
  wins: number;
  frequency: number;
  percentage: number;
}

export async function getAllLocals(): Promise<LocalsType[]> {
  try {
    return localsData;
  } catch (error) {
    return [];
  }
}
