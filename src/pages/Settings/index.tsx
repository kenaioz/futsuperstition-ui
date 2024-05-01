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

import { TbShirtSport } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

export function Settings() {
  const [loading, setLoading] = useState(true);

  const [jerseys, setJerseys] = useState<JerseysType[]>([]);

  useEffect(() => {
    async function fetchAllJerseys() {
      const data = await getAllJerseysData();
      setJerseys(data);
    }

    fetchAllJerseys();
    setLoading(false);
  }, []);

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
                      headers={["ID", "Nome", "Ano", "Fabricante", "Editar"]}
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
                      Camisas <TbShirtSport />
                    </h2>
                  </legend>

                  <Card title="Todas Camisas" icon={FaDatabase}>
                    <CustomTable
                      headers={["ID", "Nome", "Ano", "Fabricante", "Editar"]}
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
              </TablesContainer>
            </PageContent>
          </Layout>
        </>
      )}
    </Container>
  );
}
