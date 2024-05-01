import { faker } from "@faker-js/faker";

export const jerseysDashboardData = [
  {
    id: "1",
    name: "Home",
    year: "2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "2",
    name: "Away",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "3",
    name: "Sócio",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "4",
    name: "Alternativa",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "5",
    name: "Treino",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "6",
    name: "Viagem",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "7",
    name: "Away",
    year: "2020",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "8",
    name: "Home",
    year: "2019",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "9",
    name: "Away",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "10",
    name: "Home",
    year: "2021",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
];

export const jerseysDataOptions = [
  { id: "1", name: "Home 2022" },
  { id: "2", name: "Home 2021" },
  { id: "3", name: "Away 2023" },
  { id: "4", name: "Home 2023" },
  { id: "5", name: "Alternativa 2021" },
];

export const jerseysData = [
  { id: "1", name: "Home", year: "2022", manufacturer: "Adidas" },
  { id: "2", name: "Home", year: "2021", manufacturer: "Adidas" },
  { id: "3", name: "Away", year: "2023", manufacturer: "Adidas" },
  { id: "4", name: "Home", year: "2023", manufacturer: "Adidas" },
  { id: "5", name: "Alternativa", year: "2021", manufacturer: "Adidas" },
];
