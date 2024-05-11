import { useState, useEffect } from "react";

import {
  Container,
  PageContent,
  TablesContainer,
  TableSection,
  ActionsRow,
} from "./styles";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Cards";
import {
  CustomTable,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/CustomTable";
import { Button, ButtonIcon } from "../../components/Button";

import { getAllJerseysData, JerseysType } from "../../services/jerseys";
import { getAllTeamsData, TeamsType } from "../../services/teams";
import {
  getAllCompetitionsData,
  CompetitionsType,
} from "../../services/competitions";
import { getAllStadiumsData, StadiumsType } from "../../services/stadiums";
import { getAllLocalsData, LocalsType } from "../../services/locals";

import { MdStadium } from "react-icons/md";
import { HiTrophy } from "react-icons/hi2";
import { PiMapPinFill } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { TbShirtSport, TbVs } from "react-icons/tb";

export function Settings() {
  const [loading, setLoading] = useState(true);

  const [jerseys, setJerseys] = useState<JerseysType[]>([]);
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionsType[]>([]);
  const [locals, setLocals] = useState<LocalsType[]>([]);
  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);

  useEffect(() => {
    async function fetchAllJerseys() {
      const data = await getAllJerseysData();
      setJerseys(data);
    }

    async function fetchAllTeams() {
      const data = await getAllTeamsData();
      setTeams(data);
    }

    async function fetchAllCompetitions() {
      const data = await getAllCompetitionsData();
      setCompetitions(data);
    }

    async function fetchAllLocals() {
      const data = await getAllLocalsData();
      setLocals(data);
    }

    async function fetchAllStadiums() {
      const data = await getAllStadiumsData();
      setStadiums(data);
    }

    fetchAllJerseys();
    fetchAllTeams();
    fetchAllCompetitions();
    fetchAllLocals();
    fetchAllStadiums();
    setLoading(false);
  }, []);

  function competitionRounds(data: CompetitionsType) {
    if (data.format === "Pontos Corridos") {
      return `${data.rounds.length} Rodadas`;
    }
    return data.rounds.join(" - ");
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Layout>
            <PageContent>
              <h1>Configurações</h1>
              <TablesContainer>
                <TableSection>
                  <legend>
                    <h2>
                      Camisas <TbShirtSport />
                    </h2>
                  </legend>

                  <Card title="Todas Camisas" icon={FaDatabase}>
                    <CustomTable
                      headers={["ID", "Nome", "País", "Cidade", "Editar"]}
                    >
                      <TableBody>
                        {jerseys.map((data) => (
                          <TableRow key={data.id}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.year}</TableCell>
                            <TableCell>{data.manufacturer}</TableCell>
                            <TableCell>
                              <ButtonIcon
                                icon={RiPencilFill}
                                size={24}
                                // onClick={() => handleModalOpen(data.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </CustomTable>
                    <ActionsRow>
                      <Button title="Adicionar Camisa" />
                    </ActionsRow>
                  </Card>
                </TableSection>

                <TableSection>
                  <legend>
                    <h2>
                      Times <TbVs />
                    </h2>
                  </legend>

                  <Card title="Todos Times" icon={FaDatabase}>
                    <CustomTable
                      headers={["ID", "Nome", "Ano", "Fabricante", "Editar"]}
                    >
                      <TableBody>
                        {teams.map((data) => (
                          <TableRow key={String(data.id)}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.country}</TableCell>
                            <TableCell>{data.city}</TableCell>
                            <TableCell>
                              <ButtonIcon
                                icon={RiPencilFill}
                                size={24}
                                // onClick={() => handleModalOpen(data.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </CustomTable>
                    <ActionsRow>
                      <Button title="Adicionar Time" />
                    </ActionsRow>
                  </Card>
                </TableSection>

                <TableSection>
                  <legend>
                    <h2>
                      Competições <HiTrophy />
                    </h2>
                  </legend>

                  <Card title="Todas Competições" icon={FaDatabase}>
                    <CustomTable
                      headers={[
                        "ID",
                        "Nome",
                        "Categoria",
                        "Formato",
                        "Fases",
                        "Editar",
                      ]}
                    >
                      <TableBody>
                        {competitions.map((data) => (
                          <TableRow key={String(data.id)}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.category}</TableCell>
                            <TableCell>{data.format}</TableCell>
                            <TableCell>{competitionRounds(data)}</TableCell>
                            <TableCell>
                              <ButtonIcon
                                icon={RiPencilFill}
                                size={24}
                                // onClick={() => handleModalOpen(data.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </CustomTable>
                    <ActionsRow>
                      <Button title="Adicionar Competição" />
                    </ActionsRow>
                  </Card>
                </TableSection>

                <TableSection>
                  <legend>
                    <h2>
                      Estádios <MdStadium />
                    </h2>
                  </legend>

                  <Card title="Todos Estádios" icon={FaDatabase}>
                    <CustomTable
                      headers={["ID", "Nome", "País", "Cidade", "Editar"]}
                    >
                      <TableBody>
                        {stadiums.map((data) => (
                          <TableRow key={String(data.id)}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.country}</TableCell>
                            <TableCell>{data.city}</TableCell>
                            <TableCell>
                              <ButtonIcon
                                icon={RiPencilFill}
                                size={24}
                                // onClick={() => handleModalOpen(data.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </CustomTable>
                    <ActionsRow>
                      <Button title="Adicionar Estádio" />
                    </ActionsRow>
                  </Card>
                </TableSection>

                <TableSection>
                  <legend>
                    <h2>
                      Outros Locais <PiMapPinFill />
                    </h2>
                  </legend>

                  <Card title="Todos Locais" icon={FaDatabase}>
                    <CustomTable
                      headers={["ID", "Nome", "Categoria", "Editar"]}
                    >
                      <TableBody>
                        {locals.map((data) => (
                          <TableRow key={String(data.id)}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.category}</TableCell>
                            <TableCell>
                              <ButtonIcon
                                icon={RiPencilFill}
                                size={24}
                                // onClick={() => handleModalOpen(data.id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </CustomTable>
                    <ActionsRow>
                      <Button title="Adicionar Local" />
                    </ActionsRow>
                  </Card>
                </TableSection>
              </TablesContainer>
            </PageContent>
          </Layout>
        </>
      )}
    </Container>
  );
}
