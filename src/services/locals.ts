import {
  localsDashboard,
  localsData,
  localsDataDetails,
} from "../utils/locals";

export interface LocalsDashboardType {
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

async function getLocalsDashboardData(): Promise<LocalsDashboardType[]> {
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

async function getAllLocalsDetails(): Promise<LocalsType[]> {
  try {
    return localsDataDetails;
  } catch (error) {
    return [];
  }
}

export { getLocalsDashboardData, getAllLocals, getAllLocalsDetails };
