import { useState, useEffect } from "react";

import {
  Container,
  PageContent,
  FormsGrid,
  DualSection,
  ActionsSection,
  Code,
} from "./styles";

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import {
  Forms,
  Dropdown,
  Number,
  RadioGroup,
  RadioButton,
  CustomDatePicker,
} from "../../components/Forms";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

import dayjs, { Dayjs } from "dayjs";

import { getAllTeamsData, TeamsType } from "../../services/teams";
import { getAllStadiumsData, StadiumsType } from "../../services/stadiums";
import { getAllLocals, LocalsType } from "../../services/locals";
import { getAllJerseysData, JerseysType } from "../../services/jerseys";
import {
  getAllCompetitions,
  CompetitionsType,
} from "../../services/competitions";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, FormProvider } from "react-hook-form";

const DayjsType = z.custom<Dayjs>(
  (value) => {
    if (dayjs.isDayjs(value)) {
      return dayjs(value).format("DD/MM/YYYY");
    }
  },
  {
    message: "Data está vazia ou com um formato invalido.",
  }
);

const CreateGameSchema = z
  .object({
    homeTeam: z.object(
      {
        data: z.object(
          { value: z.string(), label: z.string() },
          { required_error: "Este campo é obrigatório." }
        ),
        goals: z.number(),
      },
      {
        required_error: "Este campo é obrigatório.",
        invalid_type_error: "Este campo é obrigatório.",
      }
    ),
    awayTeam: z.object({
      data: z.object(
        { value: z.string(), label: z.string() },
        {
          required_error: "Este campo é obrigatório.",
          invalid_type_error: "Este campo é obrigatório.",
        }
      ),
      goals: z.number(),
    }),
    stadium: z.object(
      { value: z.string(), label: z.string() },
      {
        required_error: "Este campo é obrigatório.",
        invalid_type_error: "Este campo é obrigatório.",
      }
    ),
    competition: z.object({
      data: z.object(
        { value: z.string(), label: z.string() },
        {
          required_error: "Este campo é obrigatório.",
          invalid_type_error: "Este campo é obrigatório.",
        }
      ),
      round: z.object(
        { value: z.string(), label: z.string() },
        {
          required_error: "Este campo é obrigatório.",
          invalid_type_error: "Este campo é obrigatório.",
        }
      ),
    }),
    jersey: z.object(
      { value: z.string(), label: z.string() },
      {
        required_error: "Este campo é obrigatório.",
        invalid_type_error: "Este campo é obrigatório.",
      }
    ),
    date: DayjsType,
    option: z.string({
      required_error: "Este campo é obrigatório.",
      invalid_type_error: "Este campo é obrigatório.",
    }),
    local: z
      .object(
        { value: z.string(), label: z.string() },
        { invalid_type_error: "Este campo é obrigatório" }
      )
      .optional(),
  })
  .refine(
    (data) =>
      data.option !== "other" || (data.option === "other" && data.local),
    {
      message: "Este campo é obrigatório",
      path: ["local"],
    }
  );

type GameSchema = z.infer<typeof CreateGameSchema>;

export function NewGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [formsConfirmation, setFormsConfirmation] = useState<GameSchema>();

  const [locals, setLocals] = useState<LocalsType[]>([]);
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);
  const [jerseys, setJerseys] = useState<JerseysType[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionsType[]>([]);
  const [competitionRounds, setCompetitionRounds] = useState<string[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await getAllTeamsData();

      setTeams(response);
    }
    async function fetchStadiums() {
      const response = await getAllStadiumsData();
      setStadiums(response);
    }

    async function fetchLocals() {
      const response = await getAllLocals();
      setLocals(response);
    }

    async function fetchJerseys() {
      const response = await getAllJerseysData();
      setJerseys(response);
    }

    async function fetchCompetitions() {
      const response = await getAllCompetitions();
      setCompetitions(response);
    }

    fetchTeams();
    fetchStadiums();
    fetchLocals();
    fetchJerseys();
    fetchCompetitions();
  }, []);

  const methods = useForm<GameSchema>({
    resolver: zodResolver(CreateGameSchema),
    shouldUnregister: true,
    defaultValues: {
      date: dayjs().locale("pt-br"),
      homeTeam: {
        goals: 0,
      },
      awayTeam: {
        goals: 0,
      },
      option: "stadium",
    },
  });

  const { control, handleSubmit, watch } = methods;

  const optionField = watch("option");
  const competitionField = watch("competition.data");

  useEffect(() => {
    if (competitionField) {
      const competition = competitions.find(
        (competition) => competitionField.label === competition.name
      );

      if (competition) {
        setCompetitionRounds(competition.rounds);
      }
    } else {
      setCompetitionRounds([]);
    }
  }, [competitionField]);

  function handleGameSubmit(data: GameSchema) {
    handleModalOpen(data);
  }

  function handleModalOpen(data: GameSchema) {
    setFormsConfirmation(data);
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  function sendForms() {
    const data = watch();

    const formatedData = {
      homeTeam: data.homeTeam,
      awayTeam: data.awayTeam,
      stadium: data.stadium,
      competition: {
        value: data.competition.data.value,
        label: data.competition.data.label,
        round: data.competition.round.label,
      },
      jersey: data.jersey,
      date: dayjs(data.date).format("DD/MM/YYYY"),
      option: data.option,
    };

    console.log(formatedData);
  }

  return (
    <Container>
      <Header />

      <Modal
        title="Deseja enviar o formulário?"
        open={isOpen}
        onClose={handleModalClose}
      >
        {formsConfirmation && (
          <Code>{JSON.stringify(formsConfirmation, null, 4)}</Code>
        )}
        <ActionsSection>
          <Button
            title="Não"
            type="button"
            onClick={handleModalClose}
            isSecundary
          />
          <Button title="Sim" type="button" onClick={sendForms} />
        </ActionsSection>
      </Modal>

      <Layout>
        <PageContent>
          <fieldset>
            <legend>
              <h1>Novo Jogo</h1>
            </legend>

            <FormProvider {...methods}>
              <Forms onSubmit={handleSubmit(handleGameSubmit)}>
                <FormsGrid>
                  <DualSection>
                    <Controller
                      name="homeTeam.data"
                      control={control}
                      render={({ field }) => (
                        <Dropdown
                          id="homeTeam.data"
                          value={field.value}
                          onChange={field.onChange}
                          label="Time Mandante"
                          placeholder="Pesquisar..."
                          options={teams.map((homeTeam) => ({
                            value: String(homeTeam.id),
                            label: String(homeTeam.name),
                          }))}
                        />
                      )}
                    />

                    <Controller
                      name="homeTeam.goals"
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <Number
                          id="homeTeam.goals"
                          label="Gols"
                          placeholder="00"
                          min={0}
                          max={20}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </DualSection>

                  <DualSection>
                    <Controller
                      name="awayTeam.data"
                      control={control}
                      render={({ field }) => (
                        <Dropdown
                          id="awayTeam.data"
                          value={field.value}
                          onChange={field.onChange}
                          label="Time Visitante"
                          placeholder="Pesquisar..."
                          options={teams.map((awayTeam) => ({
                            value: String(awayTeam.id),
                            label: String(awayTeam.name),
                          }))}
                        />
                      )}
                    />

                    <Controller
                      name="awayTeam.goals"
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <Number
                          id="awayTeam.goals"
                          label="Gols"
                          placeholder="00"
                          min={0}
                          max={20}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </DualSection>

                  <Controller
                    name="stadium"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="stadium"
                        label="Estádio"
                        placeholder="Pesquisar..."
                        options={stadiums.map((stadium) => ({
                          value: String(stadium.id),
                          label: String(stadium.name),
                        }))}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />

                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomDatePicker
                        id="date"
                        label="Data do Jogo"
                        value={field.value}
                        inputRef={field.ref}
                        onChange={(date) => {
                          field.onChange(date);
                        }}
                      />
                    )}
                  />

                  <DualSection>
                    <Controller
                      name="competition.data"
                      control={control}
                      render={({ field }) => (
                        <Dropdown
                          id="competition.data"
                          label="Competição"
                          placeholder="Pesquisar..."
                          options={competitions.map((competition) => ({
                            value: String(competition.id),
                            label: String(competition.name),
                          }))}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />

                    <Controller
                      name="competition.round"
                      control={control}
                      render={({ field }) => (
                        <Dropdown
                          id="competition.round"
                          value={field.value}
                          onChange={field.onChange}
                          label="Fase"
                          placeholder="Pesquisar..."
                          options={competitionRounds.map((round, index) => ({
                            value: String(index + 1),
                            label: String(round),
                          }))}
                        />
                      )}
                    />
                  </DualSection>

                  <Controller
                    name="jersey"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="jersey"
                        label="Camisa"
                        placeholder="Pesquisar..."
                        options={jerseys.map((jersey) => ({
                          value: String(jersey.id),
                          label: String(jersey.name),
                        }))}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />

                  <DualSection>
                    <RadioGroup label="Onde você assistiu o jogo?">
                      <RadioButton
                        id="stadiumRadio"
                        field="option"
                        value="stadium"
                        label="Estádio"
                      />
                      <RadioButton
                        id="otherRadio"
                        field="option"
                        value="other"
                        label="Outros"
                      />
                    </RadioGroup>

                    {optionField === "other" && (
                      <Controller
                        name="local"
                        control={control}
                        render={({ field }) => (
                          <Dropdown
                            id="local"
                            label="Local"
                            placeholder="Pesquisar..."
                            options={locals.map((local) => ({
                              value: String(local.id),
                              label: String(local.name),
                            }))}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    )}
                  </DualSection>
                </FormsGrid>

                <ActionsSection>
                  <Button title="Cancelar" type="button" isSecundary />
                  <Button title="Salvar Jogo" type="submit" />
                </ActionsSection>
              </Forms>
            </FormProvider>
          </fieldset>
        </PageContent>
      </Layout>
    </Container>
  );
}
