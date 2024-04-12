import { useState, useEffect } from "react";

import {
  Container,
  PageContent,
  FormsGrid,
  DualSection,
  ActionsSection,
} from "./styles";

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import {
  Forms,
  Dropdown,
  Input,
  Number,
  RadioGroup,
  RadioButton,
  CustomDatePicker,
} from "../../components/Forms";
import { Button } from "../../components/Button";

import dayjs, { Dayjs } from "dayjs";

import { getAllTeams, TeamsType } from "../../services/teams";
import { getAllStadiums, StadiumsType } from "../../services/stadiums";
import { getAllLocals, LocalsType } from "../../services/locals";
import { getAllJerseys, JerseysType } from "../../services/jerseys";
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
      { required_error: "Este campo é obrigatório." }
    ),
    awayTeam: z.object({
      data: z.object(
        { value: z.string(), label: z.string() },
        { required_error: "Este campo é obrigatório." }
      ),
      goals: z.number(),
    }),
    stadium: z.object(
      { value: z.string(), label: z.string() },
      { required_error: "Este campo é obrigatório." }
    ),
    competition: z.object(
      { value: z.string(), label: z.string() },
      { required_error: "Este campo é obrigatório." }
    ),
    jersey: z.object(
      { value: z.string(), label: z.string() },
      { required_error: "Este campo é obrigatório." }
    ),
    date: DayjsType,
    option: z.string({
      required_error: "Campo de opção é obrigatório",
      invalid_type_error: "Campo de opção é obrigatório",
    }),
    local: z
      .object(
        { value: z.string(), label: z.string() },
        {
          invalid_type_error: "Este campo é obrigatório",
        }
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
  const [locals, setLocals] = useState<LocalsType[]>([]);
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);
  const [jerseys, setJerseys] = useState<JerseysType[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionsType[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await getAllTeams();

      setTeams(response);
    }
    async function fetchStadiums() {
      const response = await getAllStadiums();
      setStadiums(response);
    }

    async function fetchLocals() {
      const response = await getAllLocals();
      setLocals(response);
    }

    async function fetchJerseys() {
      const response = await getAllJerseys();
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

  const { register, control, handleSubmit, watch } = methods;

  function handleGameSubmit(data: GameSchema) {
    console.log(data);
  }

  const optionField = watch("option");

  return (
    <Container>
      <Header />
      <Layout>
        <PageContent>
          <fieldset>
            <legend>
              <h1>Novo Jogo</h1>
            </legend>

            <FormProvider {...methods}>
              <Forms onSubmit={handleSubmit(handleGameSubmit)}>
                <FormsGrid>
                  {/* <Input
                    id="teste"
                    label="Gols do Mandante"
                    placeholder="Insira a quantidade de gols"
                  /> */}

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
                          options={teams.map((local) => ({
                            value: String(local.id),
                            label: String(local.name),
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
                          options={teams.map((local) => ({
                            value: String(local.id),
                            label: String(local.name),
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
                        options={stadiums.map((local) => ({
                          value: String(local.id),
                          label: String(local.name),
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

                  <Controller
                    name="competition"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="competition"
                        label="Competição"
                        placeholder="Pesquisar..."
                        options={competitions.map((local) => ({
                          value: String(local.id),
                          label: String(local.name),
                        }))}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />

                  {/* <Controller
                  name="competition"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      id="competition"
                      value={field.value}
                        onChange={field.onChange}
                      label="Fase da Competição"
                      placeholder="Pesquisar..."
                      options={competitions.map((local) => ({
                        value: String(local.id),
                        label: String(local.name),
                      }))}
                    />
                  )}
                /> */}

                  <Controller
                    name="jersey"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="jersey"
                        label="Camisa"
                        placeholder="Pesquisar..."
                        options={jerseys.map((local) => ({
                          value: String(local.id),
                          label: String(local.name),
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
                        register={register}
                      />
                      <RadioButton
                        id="otherRadio"
                        field="option"
                        value="other"
                        label="Outro Local"
                        register={register}
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
                  <Button title="Cancelar" isSecundary />
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
