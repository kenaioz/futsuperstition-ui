import { faker } from "@faker-js/faker";

export const competitionsData = [
  {
    id: "1",
    name: "Brasileirão",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "2",
    name: "Copa do Brasil",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "3",
    name: "Paulistão",
    category: "Estadual",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "4",
    name: "Libertadores",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "5",
    name: "Sulamericana",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "6",
    name: "Supercopa do Brasil",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
  {
    id: "7",
    name: "Recopa",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
  },
];
