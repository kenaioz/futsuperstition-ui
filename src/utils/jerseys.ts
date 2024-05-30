import { faker } from "@faker-js/faker";

export const jerseysDashboardData = [
  {
    id: "1",
    name: "Home 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "2",
    name: "Away 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "3",
    name: "Sócio 2022",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "4",
    name: "Alternativa 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "5",
    name: "Treino 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "6",
    name: "Viagem 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "7",
    name: "Away 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "8",
    name: "Home 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "9",
    name: "Away 2023",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "10",
    name: "Home 2023",
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
  {
    id: "1",
    name: "Home",
    year: "2024",
    manufacturer: "New Balance",
    created_at: new Date("05/10/2024"),
    updated_at: new Date("05/10/2024"),
  },
  {
    id: "2",
    name: "Home",
    year: "2021",
    manufacturer: "Adidas",
    created_at: new Date("05/02/2024"),
    updated_at: new Date("05/02/2024"),
  },
  {
    id: "3",
    name: "Away",
    year: "2023",
    manufacturer: "Adidas",
    created_at: new Date("05/03/2024"),
    updated_at: new Date("05/03/2024"),
  },
  {
    id: "4",
    name: "Home",
    year: "2023",
    manufacturer: "Adidas",
    created_at: new Date("05/04/2024"),
    updated_at: new Date("05/04/2024"),
  },
  {
    id: "5",
    name: "Away Manga Longa",
    year: "2024",
    manufacturer: "New Balance",
    created_at: new Date("05/05/2024"),
    updated_at: new Date("05/05/2024"),
  },
];
