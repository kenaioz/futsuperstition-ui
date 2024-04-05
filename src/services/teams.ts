import { teamsData, teamsDetails } from "../utils/teams";

export interface TeamsType {
  id: number | string;
  name: string;
  location?: {
    country: string;
    city: string;
  };
}

async function getAllTeamsDetails(): Promise<TeamsType[]> {
  try {
    return teamsDetails;
  } catch (error) {
    return [];
  }
}

async function getAllTeams(): Promise<TeamsType[]> {
  try {
    return teamsData;
  } catch (error) {
    return [];
  }
}

export { getAllTeams, getAllTeamsDetails };
