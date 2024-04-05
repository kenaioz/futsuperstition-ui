import { useState, useEffect } from "react";

import { Container, PageContent } from "./styles";

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Dropdown, Input } from "../../components/Forms";

import { getAllTeams, TeamsType } from "../../services/teams";
import { getAllStadiums, StadiumsType } from "../../services/stadiums";

export function NewGame() {
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamsType>({
    id: "",
    name: "",
  });
  const [inputTest, setInputTest] = useState<string>("");
  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);
  const [selectedStadium, setSelectedStadium] = useState<StadiumsType>({
    id: "",
    name: "",
  });

  useEffect(() => {
    async function fetchTeams() {
      const response = await getAllTeams();

      setTeams(response);
    }
    async function fetchStadiums() {
      const response = await getAllStadiums();
      setStadiums(response);
    }

    fetchTeams();
    fetchStadiums();
  }, []);

  return (
    <Container>
      <Header />
      <Layout>
        <PageContent>
          <fieldset>
            <legend>
              <h1>Novo JogoNovo Jogo</h1>
            </legend>

            <Input
              id="teste"
              label="Teste"
              placeholder="Teste..."
              value={inputTest}
              onChange={setInputTest}
            />
            {inputTest && <span>{inputTest}</span>}

            <Dropdown
              id="dropdownTeam"
              label="Selecione uma opção:"
              placeholder="Pesquisar..."
              value={selectedTeam}
              options={teams}
              onChange={setSelectedTeam}
            />
            {selectedTeam.name && <span>{selectedTeam.name}</span>}

            <Dropdown
              id="dropdownStadium"
              label="Selecione uma opção:"
              placeholder="Pesquisar..."
              value={selectedStadium}
              options={stadiums}
              onChange={setSelectedStadium}
            />

            {selectedStadium.name && <span>{selectedStadium.name}</span>}
          </fieldset>
        </PageContent>
      </Layout>
    </Container>
  );
}
