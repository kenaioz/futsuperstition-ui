import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  PageContent,
  DashboardContainer,
  DashboardSection,
  GraphsRow,
  CardsRow,
  CardsColumn,
  SearchWrapper,
  ListWrapper,
  ButtonWrapper,
  ModalCentered,
} from "./styles";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Button, ButtonIcon } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { Card, TopCard } from "../../components/Cards";
import {
  CustomTable,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/CustomTable";
import { BarChart } from "../../components/Charts";
import { SearchForm, Search } from "../../components/Search";
import { Fab } from "../../components/FAB";
import { Modal } from "../../components/Modal";
import { List } from "../../components/List";
import { Spinner } from "../../components/Spinner";

import { MdStadium } from "react-icons/md";
import { HiTrophy } from "react-icons/hi2";
import { PiMapPinFill } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { TiFlowMerge } from "react-icons/ti";
import { RiBeerFill, RiPencilFill } from "react-icons/ri";
import { GiWhistle } from "react-icons/gi";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import {
  TbSoccerField,
  TbSearchOff,
  TbShirtSport,
  TbVs,
  TbListDetails,
} from "react-icons/tb";

import {
  getCompetitionsDashboard,
  CompetitionsDashboardType,
} from "../../services/competitions";
import { getAllGames, GamesType } from "../../services/games";
import {
  getJerseysDashboardData,
  JerseysDashboardDataType,
} from "../../services/jerseys";
import {
  getLocalsDashboardData,
  LocalsDashboardType,
} from "../../services/locals";
import {
  getTeamsDashboardData,
  TeamsDashboardDataType,
} from "../../services/teams";
import {
  getLocalsJerseysComp,
  LocalsJerseysType,
  getRivalsCompetitionsComp,
  RivalsCompetitionType,
} from "../../services/compilations";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const CreateSearchSchema = z.object({
  filter: z.string(),
  query: z.string().min(1, { message: "Este campo é obrigatório" }),
});
type SearchSchema = z.infer<typeof CreateSearchSchema>;

export function Dashboard() {
  const navigate = useNavigate();

  function handleNewGameNavigation() {
    navigate("/new");
  }

  function handleSettingsNavigation() {
    navigate("/settings");
  }

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [games, setGames] = useState<GamesType[]>([]);
  const [gameDetails, setGameDetails] = useState<string>();
  const [filteredGames, setFilteredGames] = useState<GamesType[]>([]);

  const [localsJerseys, setLocalsJerseys] = useState<LocalsJerseysType[]>([]);
  const [jerseys, setJerseys] = useState<JerseysDashboardDataType[]>([]);
  const [locals, setLocals] = useState<LocalsDashboardType[]>([]);
  const [localsByStadium, setLocalsByStadium] = useState<LocalsDashboardType[]>(
    []
  );
  const [localsByBar, setLocalsByBar] = useState<LocalsDashboardType[]>([]);
  const [localsByOther, setLocalsByOther] = useState<LocalsDashboardType[]>([]);

  const [rivalsCompetitions, setRivalsCompetitions] = useState<
    RivalsCompetitionType[]
  >([]);
  const [teams, setTeams] = useState<TeamsDashboardDataType[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionsDashboardType[]>(
    []
  );

  useEffect(() => {
    async function handleGames() {
      const data = await getAllGames();
      setGames(data);
      setFilteredGames(data);
    }

    async function handleJerseys() {
      const data = await getJerseysDashboardData();
      setJerseys(data);
    }

    async function handleRivals() {
      const data = await getTeamsDashboardData();
      setTeams(data);
    }

    async function handleLocals() {
      const data = await getLocalsDashboardData();
      setLocals(data);

      setLocalsByStadium(data.filter((local) => local.category == "stadium"));
      setLocalsByBar(data.filter((local) => local.category == "bar"));
      setLocalsByOther(data.filter((local) => local.category == "other"));
    }

    async function handleCompetitions() {
      const data = await getCompetitionsDashboard();
      setCompetitions(data);
    }

    async function handleComplations() {
      const dataLocalsJersey = await getLocalsJerseysComp();
      const dataRivalsCompetition = await getRivalsCompetitionsComp();

      setLocalsJerseys(dataLocalsJersey);
      setRivalsCompetitions(dataRivalsCompetition);
    }

    handleGames();
    handleCompetitions();
    handleComplations();
    handleJerseys();
    handleLocals();
    handleRivals();

    setLoading(false);
  }, []);

  function SortAndSliceLocals(
    array: LocalsDashboardType[],
    orderBy: "wins" | "percentage" | "frequency"
  ): LocalsDashboardType[] {
    // prettier-ignore
    return array.sort((a, b) => {
      return b[orderBy] - a[orderBy]
    }).slice(0, 3);
  }

  const methods = useForm<SearchSchema>({
    resolver: zodResolver(CreateSearchSchema),
  });
  const { handleSubmit, reset } = methods;

  function handleSearch(searchParams: SearchSchema) {
    const searchResult = games.filter((game) => {
      const lowerCaseQuery = searchParams.query.toLowerCase();
      const filteredProperty = searchParams.filter;

      if (filteredProperty === "homeTeam" || filteredProperty === "awayTeam") {
        const teamObject = game[filteredProperty as keyof GamesType];

        if (typeof teamObject === "object" && teamObject !== null) {
          return teamObject.name.toLowerCase().includes(lowerCaseQuery);
        }
      } else {
        const property = game[filteredProperty as keyof GamesType] as string;

        return property.toLowerCase().includes(lowerCaseQuery);
      }
    });

    setFilteredGames(searchResult);
  }

  function handleFilterClear() {
    setFilteredGames(games);
    reset();
  }

  function handleModalOpen(selectedGameId: string) {
    setIsOpen(true);
    setGameDetails(selectedGameId);
  }

  function handleModalClose() {
    setIsOpen(false);
    setGameDetails("");
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Modal
            title="Detalhes do Jogo"
            open={isOpen}
            onClose={handleModalClose}
          >
            {gameDetails ? (
              <>
                <ListWrapper>
                  <List title="ID" description={gameDetails} />
                  <List title="Titulo 2" description="Descrição 2" />
                  <List title="Titulo 1" description="Descrição 1" />
                  <List title="Titulo 2" description="Descrição 2" />
                  <List title="Titulo 1" description="Descrição 1" />
                  <List title="Titulo 2" description="Descrição 2" />
                  <List title="Titulo 1" description="Descrição 1" />
                  <List title="Titulo 2" description="Descrição 2" />
                  <List title="Titulo 1" description="Descrição 1" />
                  <List title="Titulo 2" description="Descrição 2" />
                </ListWrapper>

                <ButtonWrapper>
                  <Button title="Editar" icon={RiPencilFill} />
                </ButtonWrapper>
              </>
            ) : (
              <ModalCentered>
                <Spinner />
              </ModalCentered>
            )}
          </Modal>
          <Layout>
            <PageContent>
              <h1>Dashboard</h1>
              <DashboardContainer>
                <DashboardSection>
                  <legend>
                    <h2>
                      Compilações de Local/Camisa <TiFlowMerge />
                    </h2>
                  </legend>

                  <Card title="Top 10 - Aproveitamentos" icon={FaChartBar}>
                    <BarChart
                      dataset={localsJerseys}
                      optionToDisplay="percentage"
                      order="asc"
                      axis="x"
                    />
                  </Card>

                  <GraphsRow>
                    <Card title="Top 10 - Frequência" icon={FaChartBar}>
                      <BarChart
                        dataset={localsJerseys}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>

                    <Card title="Top 10 - Vitórias" icon={FaChartBar}>
                      <BarChart
                        dataset={localsJerseys}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Camisas <TbShirtSport />
                    </h2>
                  </legend>

                  <GraphsRow>
                    <Card title="Top 10 - Frequência" icon={FaChartBar}>
                      <BarChart
                        dataset={jerseys}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>

                    <Card title="Top 10 - Vitórias" icon={FaChartBar}>
                      <BarChart
                        dataset={jerseys}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>

                  <Card title="Top 10 - Aproveitamentos" icon={FaChartBar}>
                    <BarChart
                      dataset={jerseys}
                      optionToDisplay="percentage"
                      axis="x"
                      order="asc"
                    />
                  </Card>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Locais <MdStadium />
                    </h2>
                  </legend>
                  <CardsRow>
                    <TopCard
                      title="Estádios"
                      description="Mais frequentados"
                      icon={MdStadium}
                    >
                      {SortAndSliceLocals(localsByStadium, "frequency").map(
                        (local) => (
                          <span key={local.id}>{local.name}</span>
                        )
                      )}
                    </TopCard>

                    <TopCard
                      title="Bares"
                      description="Mais frequentados"
                      icon={RiBeerFill}
                    >
                      {SortAndSliceLocals(localsByBar, "frequency").map(
                        (local) => (
                          <span key={local.id}>{local.name}</span>
                        )
                      )}
                    </TopCard>

                    <TopCard
                      title="Outros Locais"
                      description="Mais frequentados"
                      icon={PiMapPinFill}
                    >
                      {SortAndSliceLocals(localsByOther, "frequency").map(
                        (local) => (
                          <span key={local.id}>{local.name}</span>
                        )
                      )}
                    </TopCard>
                  </CardsRow>

                  <GraphsRow>
                    <Card title="Aproveitamento" icon={FaChartBar}>
                      <BarChart
                        dataset={locals}
                        optionToDisplay="percentage"
                        order="asc"
                        axis="x"
                      />
                    </Card>

                    <CardsColumn>
                      <TopCard
                        title="Estádios"
                        description="Mais vitoriosos"
                        icon={MdStadium}
                      >
                        {SortAndSliceLocals(localsByStadium, "wins").map(
                          (local) => (
                            <span key={local.id}>{local.name}</span>
                          )
                        )}
                      </TopCard>

                      <TopCard
                        title="Bares"
                        description="Mais vitoriosos"
                        icon={RiBeerFill}
                      >
                        {SortAndSliceLocals(localsByBar, "wins").map(
                          (local) => (
                            <span key={local.id}>{local.name}</span>
                          )
                        )}
                      </TopCard>

                      <TopCard
                        title="Outros Locais"
                        description="Mais vitoriosos"
                        icon={PiMapPinFill}
                      >
                        {SortAndSliceLocals(localsByOther, "wins").map(
                          (local) => (
                            <span key={local.id}>{local.name}</span>
                          )
                        )}
                      </TopCard>
                    </CardsColumn>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Compilações - Rival/Campeonato <TiFlowMerge />
                    </h2>
                  </legend>

                  <Card title="Top 10 - Aproveitamentos" icon={FaChartBar}>
                    <BarChart
                      dataset={rivalsCompetitions}
                      optionToDisplay="percentage"
                      order="asc"
                      axis="x"
                    />
                  </Card>

                  <GraphsRow>
                    <Card title="Top 10 - Frequência" icon={FaChartBar}>
                      <BarChart
                        dataset={rivalsCompetitions}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>

                    <Card title="Top 10 - Vitórias" icon={FaChartBar}>
                      <BarChart
                        dataset={rivalsCompetitions}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Rivais <TbVs />
                    </h2>
                  </legend>

                  <Card title="Top 10 - Aproveitamentos" icon={FaChartBar}>
                    <BarChart
                      dataset={teams}
                      optionToDisplay="percentage"
                      axis="x"
                      order="asc"
                    />
                  </Card>

                  <GraphsRow>
                    <Card title="Top 10 - Frequência" icon={FaChartBar}>
                      <BarChart
                        dataset={teams}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>

                    <Card title="Top 10 - Vitórias" icon={FaChartBar}>
                      <BarChart
                        dataset={teams}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Campeonatos <HiTrophy />
                    </h2>
                  </legend>

                  <GraphsRow>
                    <Card title="Top 10 - Aproveitamentos" icon={FaChartBar}>
                      <BarChart
                        dataset={competitions}
                        optionToDisplay="percentage"
                        order="asc"
                        axis="x"
                      />
                    </Card>

                    <Card title="Top 10 - Vitórias" icon={FaChartBar}>
                      <BarChart
                        dataset={competitions}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <Card title="Todos os Jogos" icon={TbSoccerField}>
                  <FormProvider {...methods}>
                    <SearchForm onSubmit={handleSubmit(handleSearch)}>
                      <SearchWrapper>
                        <Search
                          filterId="filter"
                          searchId="query"
                          placeholder="Pesquisar..."
                        />
                        <Button
                          title="Pesquisar"
                          type="submit"
                          icon={IoSearch}
                        />
                        <Button
                          title="Limpar Pesquisa"
                          icon={TbSearchOff}
                          isSecundary
                          type="button"
                          onClick={handleFilterClear}
                        />
                      </SearchWrapper>
                    </SearchForm>
                  </FormProvider>

                  <CustomTable
                    headers={[
                      "Id",
                      "Casa",
                      "Placar",
                      "Visitante",
                      "Data",
                      "Estádio",
                      "Camisa",
                      "Assistido de",
                      "Ações",
                    ]}
                  >
                    <TableBody>
                      {filteredGames.map((data) => (
                        <TableRow key={data.id}>
                          <TableCell>{data.id}</TableCell>
                          <TableCell>{data.homeTeam.name}</TableCell>
                          <TableCell>
                            {data.homeTeam.goals} X {data.awayTeam.goals}
                          </TableCell>
                          <TableCell>{data.awayTeam.name}</TableCell>
                          <TableCell>{data.date}</TableCell>
                          <TableCell>{data.stadium}</TableCell>
                          <TableCell>{data.jersey}</TableCell>
                          <TableCell>{data.local}</TableCell>
                          <TableCell>
                            <ButtonIcon
                              icon={TbListDetails}
                              size={24}
                              onClick={() => handleModalOpen(data.id)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </CustomTable>
                </Card>
              </DashboardContainer>
            </PageContent>
          </Layout>

          <Fab
            actions={[
              {
                label: "Adicionar Jogo",
                icon: GiWhistle,
                onClick: handleNewGameNavigation,
              },
              {
                label: "Configurações",
                icon: IoSettingsSharp,
                onClick: handleSettingsNavigation,
              },
            ]}
          />
        </>
      )}
    </Container>
  );
}
