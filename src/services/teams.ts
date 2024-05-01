import { teamsData, teamsOptions, teamsDashboardData } from "../utils/teams";

export interface TeamsDashboardDataType {
  id: string;
  name: string;
  wins: number;
  frequency: number;
  percentage: number;
}

export interface TeamsType {
  id: number | string;
  name: string;
  country?: string;
  city?: string;
  created_at?: string;
  updated_at?: string;
}

export async function getTeamsDashboardData(): Promise<
  TeamsDashboardDataType[]
> {
  try {
    return teamsDashboardData;
  } catch (error) {
    return [];
  }
}

async function getAllTeamsOptions(): Promise<TeamsType[]> {
  try {
    return teamsOptions;
  } catch (error) {
    return [];
  }
}

async function getAllTeamsData(): Promise<TeamsType[]> {
  try {
    return teamsData;
  } catch (error) {
    return [];
  }
}

export { getAllTeamsOptions, getAllTeamsData };
