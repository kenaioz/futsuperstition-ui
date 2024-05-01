import { stadiumsData, stadiumsOptions } from "../utils/stadiums";

export interface StadiumsType {
  id: number | string;
  name: string;
  country?: string;
  city?: string;
  created_at?: string;
  updated_at?: string;
}

async function getAllStadiumsOptions(): Promise<StadiumsType[]> {
  try {
    return stadiumsOptions;
  } catch (error) {
    return [];
  }
}

async function getAllStadiumsData(): Promise<StadiumsType[]> {
  try {
    return stadiumsData;
  } catch (error) {
    return [];
  }
}

export { getAllStadiumsData, getAllStadiumsOptions };
