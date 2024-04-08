import { useState, useEffect } from "react";

import { Container, PageContent, Forms } from "./styles";

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import {
  Dropdown,
  Input,
  RadioGroup,
  RadioButton,
  CustomDatePicker,
} from "../../components/Forms";

import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";

import { getAllTeams, TeamsType } from "../../services/teams";
import { getAllStadiums, StadiumsType } from "../../services/stadiums";

export function NewGame() {
  const [inputTest, setInputTest] = useState<string>("");

  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [homeTeam, setHomeTeam] = useState<TeamsType>({
    id: "",
    name: "",
  });
  const [awayTeam, setAwayTeam] = useState<TeamsType>({
    id: "",
    name: "",
  });

  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);
  const [selectedStadium, setSelectedStadium] = useState<StadiumsType>({
    id: "",
    name: "",
  });

  const [gameDate, setGameDate] = useState<Dayjs | null>(
    dayjs().locale("pt-br")
  );

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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  console.log(dayjs(gameDate).format("DD/MM/YYYY"));

  return (
    <Container>
      <Header />
      <Layout>
        <PageContent>
          <fieldset>
            <legend>
              <h1>Novo Jogo</h1>
            </legend>

            <Forms>
              <Input
                id="teste"
                label="Teste"
                placeholder="Teste..."
                value={inputTest}
                onChange={setInputTest}
              />

              <Dropdown
                id="dropdownHomeTeam"
                label={homeTeam.name ? homeTeam.name : "Time Mandante"}
                placeholder="Pesquisar..."
                value={homeTeam}
                options={teams}
                onChange={setHomeTeam}
              />

              <Dropdown
                id="dropdownAwayTeam"
                label={awayTeam.name ? awayTeam.name : "Time Visitante"}
                placeholder="Pesquisar..."
                value={awayTeam}
                options={teams}
                onChange={setAwayTeam}
              />

              <Dropdown
                id="dropdownStadium"
                label="Estádio"
                placeholder="Pesquisar..."
                value={selectedStadium}
                options={stadiums}
                onChange={setSelectedStadium}
              />

              <RadioGroup label="Local que você assistiu o jogo">
                <RadioButton
                  id="stadiumRadio"
                  name="options"
                  value="stadium"
                  checked={selectedOption === "stadium"}
                  onChange={handleOptionChange}
                  label="Estádio"
                />
                <RadioButton
                  id="otherRadio"
                  name="options"
                  value="other"
                  checked={selectedOption === "other"}
                  onChange={handleOptionChange}
                  label="Outro Local"
                />
              </RadioGroup>

              <CustomDatePicker
                id="gameDate"
                label="Data do Jogo"
                value={gameDate}
                onChange={setGameDate}
              />
            </Forms>
          </fieldset>
        </PageContent>
      </Layout>
    </Container>
  );
}
