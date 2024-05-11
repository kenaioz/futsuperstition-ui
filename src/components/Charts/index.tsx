import { Container } from "./styles";
import { useTheme } from "../../hooks/ThemeProvider";

import { CompetitionsDashboardType } from "../../services/competitions";
import { JerseysDashboardDataType } from "../../services/jerseys";
import { LocalsDashboardType } from "../../services/locals";
import { TeamsDashboardDataType } from "../../services/teams";
import {
  LocalsJerseysType,
  RivalsCompetitionType,
} from "../../services/compilations";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type DatasetType =
  | RivalsCompetitionType[]
  | LocalsJerseysType[]
  | JerseysDashboardDataType[]
  | CompetitionsDashboardType[]
  | LocalsDashboardType[]
  | TeamsDashboardDataType[];

type OptionToDisplayType = "frequency" | "wins" | "percentage";

interface ChartProps {
  dataset: DatasetType;
  optionToDisplay: OptionToDisplayType;
  orderBy?: "desc" | "asc";
  axis: "x" | "y";
}

export function BarChart({
  dataset,
  optionToDisplay,
  orderBy,
  axis,
}: ChartProps) {
  const { theme } = useTheme();

  dataset.sort((a, b) => {
    const order = orderBy === "asc" ? 1 : -1;

    return order * (a[optionToDisplay] - b[optionToDisplay]);
  });

  const labels = dataset.map((data) => {
    if ("year" in data) {
      return `${data.name} + ${data.year}`;
    }
    return data.name;
  });

  const setLabel = (): string => {
    switch (optionToDisplay) {
      case "frequency":
        return "Frequência";
      case "wins":
        return "Vitórias";
      case "percentage":
        return "Porcentagem";
    }
  };

  const options = {
    indexAxis: axis,
    elements: {
      bar: {
        borderSkipped: false,
        borderRadius: 8,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      x: {
        suggestedMax: dataset.reduce((max, data) => {
          return Math.max(max, data.frequency);
        }, 0),
        ticks: {
          color: theme.COLORS.TEXT,
        },
      },
      y: {
        suggestedMax: 100,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: theme.COLORS.TEXT,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: setLabel(),
        data: dataset.map((data) => {
          if (optionToDisplay === "frequency") {
            return data.frequency;
          }
          if (optionToDisplay === "percentage") {
            return data.percentage;
          }
          if (optionToDisplay === "wins") {
            return data.wins;
          }
        }),
        backgroundColor: theme.COLORS.HIGHLIGHT,
        maxBarThickness: 40,
      },
    ],
  };
  [];

  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}
