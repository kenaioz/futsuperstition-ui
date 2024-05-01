import {
  competitionsDashboard,
  competitionsData,
  competitionsDataDetails,
} from "../utils/competitions";

export interface CompetitionsDashboardType {
  id: string;
  name: string;
  category: string;
  wins: number;
  frequency: number;
}

export interface CompetitionsType {
  id: string;
  name: string;
  category?: string;
  format?: string;
  rounds: string[];
}

async function getCompetitionsDashboard(): Promise<
  CompetitionsDashboardType[]
> {
  try {
    return competitionsDashboard;
  } catch (error) {
    return [];
  }
}

async function getAllCompetitionsOptions(): Promise<CompetitionsType[]> {
  try {
    return competitionsData;
  } catch (error) {
    return [];
  }
}

async function getAllCompetitionsData(): Promise<CompetitionsType[]> {
  try {
    return competitionsDataDetails;
  } catch (error) {
    return [];
  }
}

export {
  getCompetitionsDashboard,
  getAllCompetitionsOptions,
  getAllCompetitionsData,
};
