import { useState, useEffect } from "react";

import {
  Container,
  PageContent,
  FormsGrid,
  TeamSection,
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

import dayjs, { Dayjs } from "dayjs";
import("dayjs/locale/pt-br");

import { getAllTeams, TeamsType } from "../../services/teams";
import { getAllStadiums, StadiumsType } from "../../services/stadiums";
import { getAllLocals, LocalsType } from "../../services/locals";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

const DayjsType = z.custom<Dayjs>((value) => {
  if (dayjs.isDayjs(value)) {
    return value;
  } else {
    throw new Error("Invalid Dayjs object");
  }
});

const CreateGameSchema = z.object({
  homeTeam: z.object({
    data: z.object({
      value: z.string(),
      label: z.string(),
    }),
    goals: z.number(),
  }),
  awayTeam: z.object({
    data: z.object({
      value: z.string(),
      label: z.string(),
    }),
    goals: z.number(),
  }),
  stadium: z.object({
    value: z.string(),
    label: z.string(),
  }),
  local: z.object({
    value: z.string(),
    label: z.string(),
  }),
  date: DayjsType,
  option: z.string(),
});

type GameSchema = z.infer<typeof CreateGameSchema>;

export function NewGame() {
  const [locals, setLocals] = useState<LocalsType[]>([]);
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [stadiums, setStadiums] = useState<StadiumsType[]>([]);

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

    fetchTeams();
    fetchStadiums();
    fetchLocals();
  }, []);

  const { control, register, handleSubmit, watch } = useForm<GameSchema>({
    resolver: zodResolver(CreateGameSchema),
    defaultValues: {
      date: dayjs().locale("pt-br"),
      homeTeam: {
        goals: 0,
      },
      awayTeam: {
        goals: 0,
      },
    },
  });

  function handleGameSubmit(data: GameSchema) {
    const formattedDate = dayjs(data.date).format("DD/MM/YYYY");
    const formattedData = { ...data, date: formattedDate };

    console.log(formattedData);
  }

  const otherPlace = watch("option");

  console.log(watch());

  const [number, setNumber] = useState<number>(0);

  return (
    <Container>
      <Header />
      <Layout>
        <PageContent>
          <fieldset>
            <legend>
              <h1>Novo Jogo</h1>
            </legend>

            <Forms onSubmit={handleSubmit(handleGameSubmit)}>
              <FormsGrid>
                {/* <Input
                  id="homeTeam.goals"
                  label="Gols do Mandante"
                  placeholder="Insira a quantidade de gols"
                  register={register}
                /> */}

                <TeamSection>
                  <Controller
                    name="homeTeam.data"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="homeTeam"
                        fieldProps={field}
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
                </TeamSection>

                <TeamSection>
                  <Controller
                    name="awayTeam.data"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="awayTeam"
                        fieldProps={field}
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
                </TeamSection>

                <Controller
                  name="stadium"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      id="stadium"
                      fieldProps={field}
                      label="Estádio"
                      placeholder="Pesquisar..."
                      options={stadiums.map((local) => ({
                        value: String(local.id),
                        label: String(local.name),
                      }))}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="date"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomDatePicker
                      label="Data do Jogo"
                      value={field.value}
                      inputRef={field.ref}
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                    />
                  )}
                />

                <RadioGroup label="Onde você assistiu o jogo?">
                  <RadioButton
                    id="stadiumRadio"
                    name="option"
                    value="stadium"
                    label="Estádio"
                    register={register}
                  />
                  <RadioButton
                    id="otherRadio"
                    name="option"
                    value="other"
                    label="Outro Local"
                    register={register}
                  />
                </RadioGroup>

                {otherPlace === "other" && (
                  <Controller
                    name="local"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id="local"
                        fieldProps={field}
                        label="Local"
                        placeholder="Pesquisar..."
                        options={locals.map((local) => ({
                          value: String(local.id),
                          label: String(local.name),
                        }))}
                      />
                    )}
                  />
                )}
              </FormsGrid>

              <ActionsSection>
                <button>Cancelar</button>
                <button type="submit">Enviar Forms</button>
              </ActionsSection>
            </Forms>
          </fieldset>
        </PageContent>
      </Layout>
    </Container>
  );
}
