import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Button, ButtonIcon } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { Card, TopCard, LongCard } from "../../components/Cards";
import {
  CustomTable,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/CustomTable";
import { BarChart } from "../../components/Charts";
import { Search } from "../../components/Search";
import { Fab } from "../../components/FAB";
import { Modal } from "../../components/Modal";
import { List } from "../../components/List";
import { Spinner } from "../../components/Spinner";

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

import { MdStadium } from "react-icons/md";
import { HiTrophy } from "react-icons/hi2";
import { PiMapPinFill } from "react-icons/pi";
import { FaChartBar, FaDatabase, FaTrashAlt } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
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
  getAllCompetitions,
  CompetitionsType,
  getCompetitionsDashboard,
  CompetitionsDashboardType,
} from "../../services/competitions";
import { getAllGames, GamesType } from "../../services/games";
import {
  getJerseysDashboardData,
  getAllJerseys,
  JerseysDashboardType,
  JerseysType,
} from "../../services/jerseys";
import {
  getLocalsDashboardData,
  getAllLocals,
  LocalsType,
} from "../../services/locals";
import { getAllRivals, RivalsType } from "../../services/rivals";
import {
  getLocalsJerseysComp,
  LocalsJerseysType,
  getRivalsCompetitionsComp,
  RivalsCompetitionType,
} from "../../services/compilations";
import { useNavigate } from "react-router-dom";

export interface SearchParamsType {
  query: string;
  filter: string;
}

export interface GamesDataType {
  id: string;
  teamHome: string;
  score: string;
  teamAway: string;
  date: string;
  stadium: string;
  jersey: string;
  local: string;
}

export function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [games, setGames] = useState<GamesType[]>([]);
  const [gameDetails, setGameDetails] = useState<string>();
  const [filteredGames, setFilteredGames] = useState<GamesType[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParamsType>({
    query: "",
    filter: "",
  });

  const [jerseys, setJerseys] = useState<JerseysDashboardType[]>([]);
  const [locals, setLocals] = useState<LocalsType[]>([]);
  const [localsJerseys, setLocalsJerseys] = useState<LocalsJerseysType[]>([]);

  const [rivals, setRivals] = useState<RivalsType[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionsDashboardType[]>(
    []
  );
  const [rivalsCompetitions, setRivalsCompetitions] = useState<
    RivalsCompetitionType[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function handleGames() {
      const data = await getAllGames();

      setGames(data);
    }
    async function handleJerseys() {
      const data = await getJerseysDashboardData();
      setJerseys(data);
    }
    async function handleRivals() {
      const data = await getAllRivals();
      setRivals(data);
    }
    async function handleLocals() {
      const data = await getLocalsDashboardData();
      setLocals(data);
    }
    async function handleCompetitions() {
      const data = await getCompetitionsDashboard();
      setCompetitions(data);
    }
    async function handleComplations() {
      const data = await getLocalsJerseysComp();
      const data1 = await getRivalsCompetitionsComp();

      setLocalsJerseys(data);
      setRivalsCompetitions(data1);
    }

    handleGames();
    handleCompetitions();
    handleComplations();
    handleJerseys();
    handleLocals();
    handleRivals();

    setLoading(false);
  }, []);

  function handleNewGameNavigation() {
    navigate("/new");
  }

  function handleSettingsNavigation() {
    navigate("/settings");
  }

  function handleSearch() {
    if (!searchParams.filter || !searchParams.query) {
      return alert(
        "Tenha certeza que você selecionou um filtro e tenha preenchido a barra de pesquisa"
      );
    }
    const searchResult = games.filter((game) => {
      const lowerCaseQuery = searchParams.query.toLowerCase();
      const filteredProperty = searchParams.filter;

      // return (
      //   game.hasOwnProperty(filteredProperty) &&
      //   game[filteredProperty as keyof GamesDataType]
      //     .toLowerCase()
      //     .includes(lowerCaseQuery)
      // );
    });

    setFilteredGames(searchResult);
  }

  function handleFilterClear() {
    setFilteredGames([]);
    setSearchParams({
      filter: "",
      query: "",
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
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
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      {
                        id: 1,
                        name: "Morumbi + Camisa Home 2023",
                        quantity: 10,
                      },
                      { id: 2, name: "Casa + Camisa Home 2023", quantity: 12 },
                      { id: 3, name: "Bar + Camisa Home 2023", quantity: 4 },
                    ]}
                    description="Compilações de local e camisas mais frequentes"
                    options2={[
                      {
                        id: 4,
                        name: "Morumbi + Camisa Home 2023",
                        quantity: 7,
                      },
                      { id: 5, name: "Casa + Camisa Home 2022", quantity: 5 },
                      {
                        id: 6,
                        name: "Bar + Camisa Alternativa 2022",
                        quantity: 2,
                      },
                    ]}
                    description2="Compilações de local e camisas mais vitoriosas"
                  />

                  <Card
                    title="Top 10 - Compilações mais vitoriosas em %"
                    icon={FaChartBar}
                  >
                    <BarChart
                      dataset={localsJerseys}
                      optionToDisplay="percentage"
                      axis="x"
                    />
                  </Card>

                  <GraphsRow>
                    <Card
                      title="Top 10 - Compilações mais frequentes"
                      icon={FaChartBar}
                    >
                      <BarChart
                        dataset={localsJerseys}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>
                    <Card
                      title="Top 10 - Compilações mais vitoriosas"
                      icon={FaChartBar}
                    >
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
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description="Mais usadas em estádio"
                    options2={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description2="Mais usadas em outros locais"
                    options3={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description3="Mais vitoriosas em estádios"
                    options4={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description4="Mais vitoriosas em outros locais"
                  />

                  <GraphsRow>
                    <Card title="Todos as camisas" icon={FaDatabase}>
                      <CustomTable
                        headers={[
                          "Id",
                          "Nome",
                          "Ano",
                          "Usada em",
                          "Vitórias",
                          "Aproveitamento",
                        ]}
                      >
                        <TableBody>
                          {jerseys.map((data) => (
                            <TableRow key={data.id}>
                              <TableCell>{data.id}</TableCell>
                              <TableCell>{data.name}</TableCell>
                              <TableCell>{data.year}</TableCell>
                              <TableCell>{data.frequency}</TableCell>
                              <TableCell>{data.wins}</TableCell>
                              <TableCell>{data.percentage}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </CustomTable>
                    </Card>

                    <Card title="Camisas mais usadas" icon={FaChartBar}>
                      <BarChart
                        dataset={jerseys}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Locais <MdStadium />
                    </h2>
                  </legend>
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      { id: 13, name: "Morumbi", quantity: 21 },
                      { id: 14, name: "Mineirão", quantity: 2 },
                      { id: 15, name: "José Liberatti", quantity: 1 },
                    ]}
                    description="Estádios mais frequentados"
                    options2={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description2="Outros locais mais frequentados"
                    options3={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description3="Estádios mais vitoriosos"
                    options4={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description4="Outros locais mais vitoriosos"
                  />

                  <GraphsRow>
                    <Card title="Locais mais frequentados" icon={FaChartBar}>
                      <BarChart
                        dataset={locals}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>

                    <Card title="Locais mais vitoriosos" icon={FaChartBar}>
                      <BarChart
                        dataset={locals}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>

                    <CardsColumn>
                      <TopCard
                        title="Estádios"
                        description="Mais frequentados"
                        icon={MdStadium}
                        options={[
                          { id: 13, name: "Morumbi", quantity: 21 },
                          { id: 14, name: "Mineirão", quantity: 2 },
                          { id: 15, name: "José Liberatti", quantity: 1 },
                        ]}
                      />

                      <TopCard
                        title="Bares"
                        description="Mais frequentados"
                        icon={RiBeerFill}
                        options={[
                          { id: 19, name: "Bar São Francisco", quantity: 15 },
                          { id: 20, name: "Bar Aleatório", quantity: 10 },
                        ]}
                      />

                      <TopCard
                        title="Outros Locais"
                        description="Mais frequentados"
                        icon={PiMapPinFill}
                        options={[
                          { id: 16, name: "Casa", quantity: 32 },
                          { id: 18, name: "Casa de Fulano", quantity: 5 },
                        ]}
                      />
                    </CardsColumn>
                  </GraphsRow>
                </DashboardSection>

                <DashboardSection>
                  <legend>
                    <h2>
                      Compilações - Rival/Campeonato <TiFlowMerge />
                    </h2>
                  </legend>
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      { id: 1, name: "Palmeiras + Paulistão", quantity: 10 },
                      { id: 2, name: "Santos + Brasileirão", quantity: 12 },
                      { id: 3, name: "Corinthians + Brasileirão", quantity: 6 },
                    ]}
                    description="Compilações de rivais e campeonatos mais frequentes"
                    options2={[
                      { id: 4, name: "Santos + Brasileirão", quantity: 7 },
                      { id: 5, name: "Palmeiras + Paulistão", quantity: 5 },
                      { id: 6, name: "Corinthians + Brasileirão", quantity: 2 },
                    ]}
                    description2="Compilações de rivais e campeonatos mais vitoriosas"
                  />

                  <Card
                    title="Top 10 - Compilações mais vitoriosas em %"
                    icon={FaChartBar}
                  >
                    <BarChart
                      dataset={rivalsCompetitions}
                      optionToDisplay="percentage"
                      axis="x"
                    />
                  </Card>

                  <GraphsRow>
                    <Card
                      title="Top 10 - Compilações mais frequentes"
                      icon={FaChartBar}
                    >
                      <BarChart
                        dataset={rivalsCompetitions}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>
                    <Card
                      title="Top 10 - Compilações mais vitoriosas"
                      icon={FaChartBar}
                    >
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
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      { id: 13, name: "Morumbi", quantity: 21 },
                      { id: 14, name: "Mineirão", quantity: 2 },
                      { id: 15, name: "José Liberatti", quantity: 1 },
                    ]}
                    description="Mais frequentes em estádios"
                    options2={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description2="Mais frequentes em outros locais"
                    options3={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description3="Maiores fregueses em estádio"
                    options4={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description4="Maiores fregueses em outros locais"
                  />

                  <GraphsRow>
                    <Card
                      title="Top 10 - Rivais mais frequentes"
                      icon={FaChartBar}
                    >
                      <BarChart
                        dataset={rivals}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>
                    <Card title="Top 10 - Maiores fregueses" icon={FaChartBar}>
                      <BarChart
                        dataset={rivals}
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
                  <LongCard
                    title="Ranking"
                    icon={FaRankingStar}
                    options={[
                      { id: 13, name: "Morumbi", quantity: 21 },
                      { id: 14, name: "Mineirão", quantity: 2 },
                      { id: 15, name: "José Liberatti", quantity: 1 },
                    ]}
                    description="Mais frequentados em estádios"
                    options2={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description2="Mais frequentados em outros locais"
                    options3={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description3="Mais vitoriosos em estádios"
                    options4={[
                      { id: 10, name: "Camisa Home 20", quantity: 3 },
                      { id: 11, name: "Camisa Sócio 22", quantity: 2 },
                      { id: 12, name: "Camisa Alternativa 22", quantity: 1 },
                    ]}
                    description4="Mais vitoriosos em outros locais"
                  />

                  <GraphsRow>
                    <Card
                      title="Top 10 - Competições mais frequentes"
                      icon={FaChartBar}
                    >
                      <BarChart
                        dataset={competitions}
                        optionToDisplay="frequency"
                        axis="y"
                      />
                    </Card>
                    <Card
                      title="Top 10 - Competições com mais vitórias"
                      icon={FaChartBar}
                    >
                      <BarChart
                        dataset={competitions}
                        optionToDisplay="wins"
                        axis="y"
                      />
                    </Card>
                  </GraphsRow>
                </DashboardSection>

                <Card title="Todos os Jogos" icon={TbSoccerField}>
                  <SearchWrapper>
                    <Search
                      value={searchParams}
                      onChange={setSearchParams}
                      onKeyDown={handleKeyPress}
                    />
                    <Button
                      title="Pesquisar"
                      icon={IoSearch}
                      onClick={handleSearch}
                    />
                    <Button
                      title="Limpar Pesquisa"
                      icon={TbSearchOff}
                      isSecundary
                      onClick={handleFilterClear}
                    />
                  </SearchWrapper>

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
                      {games.map((data) => (
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
