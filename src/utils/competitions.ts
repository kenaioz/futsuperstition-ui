import { faker } from "@faker-js/faker";

export const competitionsDashboard = [
  {
    id: "1",
    name: "Brasileirão",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "2",
    name: "Copa do Brasil",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "3",
    name: "Paulistão",
    category: "Estadual",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "4",
    name: "Libertadores",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "5",
    name: "Sulamericana",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "6",
    name: "Supercopa do Brasil",
    category: "Nacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
  },
  {
    id: "7",
    name: "Recopa",
    category: "Internacional",
    wins: faker.number.int({ min: 5, max: 15 }),
    frequency: faker.number.int({ min: 15, max: 30 }),
    percentage: faker.number.int({ min: 20, max: 100 }),
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

export const competitionsDataDetails = [
  {
    id: "1",
    name: "Brasileirão",
    category: "Nacional",
    format: "Pontos Corridos",
    rounds: Array.from({ length: 36 }, (_, index) => `Rodada ${index + 1}`),
  },
  {
    id: "2",
    name: "Copa do Brasil",
    category: "Nacional",
    format: "Eliminatória",
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
    category: "Estadual",
    format: "Eliminatória",
    rounds: ["Primeira Fase", "Quartas de Final", "Semifinal", "Final"],
  },
  {
    id: "4",
    name: "Libertadores",
    category: "Internacional",
    format: "Eliminatória",
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
    category: "Internacional",
    format: "Eliminatória",
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
    category: "Nacional",
    format: "Eliminatória",
    rounds: ["Final"],
  },
  {
    id: "7",
    name: "Recopa",
    category: "Internacional",
    format: "Eliminatória",
    rounds: ["Final"],
  },
];
