import { faker } from "@faker-js/faker";

export const localsDashboard = [
  {
    id: "1",
    name: "Morumbi",
    category: "stadium",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "2",
    name: "Casa",
    category: "other",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "3",
    name: "Bar sei lá",
    category: "bar",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "4",
    name: "Morumbi",
    category: "stadium",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "5",
    name: "Bar XYZ",
    category: "bar",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "6",
    name: "Casa de fulano",
    category: "other",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "7",
    name: "Morumbi",
    category: "stadium",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "8",
    name: "Bar ABC",
    category: "bar",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "9",
    name: "Casa de cicrano",
    category: "other",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "10",
    name: "Morumbi",
    category: "stadium",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
];

export const localsData = [
  { id: "1", name: "Casa" },
  { id: "2", name: "Bar São Francisco" },
  { id: "3", name: "Casa de Fulano" },
  { id: "4", name: "Bar Sei La" },
];

export const localsDataDetails = [
  { id: "1", name: "Casa", category: "home" },
  { id: "2", name: "Bar São Francisco", category: "bar" },
  { id: "3", name: "Casa de Fulano", category: "others" },
  { id: "4", name: "Bar Sei La", category: "bar" },
];
