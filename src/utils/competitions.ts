import { faker } from "@faker-js/faker";

export const competitionsDashboard = [
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

export const competitionsData = [
  {
    id: "1",
    name: "Brasileirão",
    rounds: Array.from({ length: 36 }, (_, index) => `Rodada ${index + 1}`),
  },
  {
    id: "2",
    name: "Copa do Brasil",
    rounds: [
      "Primeira Fase",
      "Segunda Fase",
      "Terceira Fase",
      "Oitavas de Final",
      "Quartas de Final",
      "Semifinal",
      "Final",
    ],
  },
  {
    id: "3",
    name: "Paulistão",
    rounds: ["Primeira Fase", "Quartas de Final", "Semifinal", "Final"],
  },
  {
    id: "4",
    name: "Libertadores",
    rounds: [
      "Fase de Grupos",
      "Oitavas de Final",
      "Quartas de Final",
      "Semifinal",
      "Final",
    ],
  },
  {
    id: "5",
    name: "Sulamericana",
    rounds: [
      "Fase de Grupos",
      "Playoffs",
      "Oitavas de Final",
      "Quartas de Final",
      "Semifinal",
      "Final",
    ],
  },
  {
    id: "6",
    name: "Supercopa do Brasil",
    rounds: ["Final"],
  },
  {
    id: "7",
    name: "Recopa",
    rounds: ["Final"],
  },
];
