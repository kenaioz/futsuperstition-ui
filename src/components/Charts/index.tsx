import { Container } from "./styles";
import { useTheme } from "../../hooks/ThemeProvider";

import {
  CompetitionsType,
  CompetitionsDashboardType,
} from "../../services/competitions";
import { JerseysType, JerseysDashboardType } from "../../services/jerseys";
import { LocalsType, LocalsDashboardType } from "../../services/locals";
import { RivalsType } from "../../services/rivals";
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
  | JerseysDashboardType[]
  | CompetitionsDashboardType[]
  | LocalsDashboardType[]
  | RivalsType[];

type OptionToDisplayType = "frequency" | "wins" | "percentage";

interface ChartProps {
  dataset: DatasetType;
  optionToDisplay: OptionToDisplayType;
  axis: "x" | "y";
}

export function BarChart({ dataset, optionToDisplay, axis }: ChartProps) {
  const { theme } = useTheme();

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

  const labels = dataset.map((data) => {
    if ("name" in data) {
      return data.name;
    } else if ("local" in data) {
      return `${data.jersey} + ${data.local.name}`;
    } else if ("competition" in data) {
      return `${data.team} + ${data.competition.name}`;
    } else {
      return "";
    }
  });

  function setLabel(): string {
    switch (optionToDisplay) {
      case "frequency":
        return "Frequência";
      case "wins":
        return "Vitórias";
      case "percentage":
        return "Porcentagem";
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: setLabel(),
        data: dataset.map((data) => {
          return (data as any)[optionToDisplay];
        }),
        backgroundColor: theme.COLORS.HIGHLIGHT,
        maxBarThickness: 40,
      },
    ],
  };

  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}
