import {
  jerseysDashboardData,
  jerseysDataOptions,
  jerseysData,
} from "../utils/jerseys";

export interface JerseysDashboardDataType {
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
  created_at?: string;
  updated_at?: string;
}

async function getJerseysDashboardData(): Promise<JerseysDashboardDataType[]> {
  try {
    return jerseysDashboardData;
  } catch (error) {
    return [];
  }
}

async function getAllJerseysOptions(): Promise<JerseysType[]> {
  try {
    return jerseysDataOptions;
  } catch (error) {
    return [];
  }
}

async function getAllJerseysData(): Promise<JerseysType[]> {
  try {
    return jerseysData;
  } catch (error) {
    return [];
  }
}

export { getJerseysDashboardData, getAllJerseysOptions, getAllJerseysData };
