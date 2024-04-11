import { localsDashboard, localsData } from "../utils/locals";

export interface LocalsDasboardType {
  id: string;
  name: string;
  category: string;
  wins: number;
  frequency: number;
  percentage: number;
}

export interface LocalsType {
  id: number | string;
  name: string;
  category?: string;
}

async function getLocalsDashboardData(): Promise<LocalsDasboardType[]> {
  try {
    return localsDashboard;
  } catch (error) {
    return [];
  }
}

async function getAllLocals(): Promise<LocalsType[]> {
  try {
    return localsData;
  } catch (error) {
    return [];
  }
}

export { getLocalsDashboardData, getAllLocals };
