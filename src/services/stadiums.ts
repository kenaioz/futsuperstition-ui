import { stadiumsData, stadiumsDetails } from "../utils/stadiums";

export interface StadiumsType {
  id: number | string;
  name: string;
  location?: {
    country: string;
    city: string;
  };
}

async function getAllStadiumsDetails(): Promise<StadiumsType[]> {
  try {
    return stadiumsDetails;
  } catch (error) {
    return [];
  }
}

async function getAllStadiums(): Promise<StadiumsType[]> {
  try {
    return stadiumsData;
  } catch (error) {
    return [];
  }
}

export { getAllStadiumsDetails, getAllStadiums };
