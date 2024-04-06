import { jerseysDashboard, jerseysData } from "../utils/jerseys";

export interface JerseysDashboardType {
  id: string;
  name: string;
  year: string;
  wins: number;
  frequency: number;
  percentage: number;
}

export interface JerseysType {
  id: string;
  name: string;
  year?: string;
  manufacturer?: string;
}

async function getJerseysDashboardData(): Promise<JerseysDashboardType[]> {
  try {
    return jerseysDashboard;
  } catch (error) {
    return [];
  }
}

async function getAllJerseys(): Promise<JerseysType[]> {
  try {
    return jerseysData;
  } catch (error) {
    return [];
  }
}

export { getJerseysDashboardData, getAllJerseys };
