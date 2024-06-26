import { ReactNode } from "react";

import {
  Container,
  ContainerTopCard,
  CardTitleWrapper,
  TierLists,
  TierList,
  ContainerLongCard,
  VerticalDivider,
} from "./styles";

import { CompetitionsDashboardType } from "../../services/competitions";
import { JerseysDashboardDataType } from "../../services/jerseys";
import { LocalsDashboardType } from "../../services/locals";
import { TeamsDashboardDataType } from "../../services/teams";
import {
  LocalsJerseysType,
  RivalsCompetitionType,
} from "../../services/compilations";

import { IconType } from "react-icons";

type OptionsType =
  | RivalsCompetitionType[]
  | LocalsJerseysType[]
  | JerseysDashboardDataType[]
  | CompetitionsDashboardType[]
  | LocalsDashboardType[]
  | TeamsDashboardDataType[];

interface CardProps {
  title: string;
  icon: IconType;
  children: ReactNode;
}

interface TopCardProps {
  title: string;
  icon: IconType;
  children: ReactNode;
  description: string;
}

interface LongCardProps {
  title: string;
  icon: IconType;
  options: OptionsType;
  description: string;
  options2?: OptionsType;
  description2?: string;
  options3?: OptionsType;
  description3?: string;
  options4?: OptionsType;
  description4?: string;
}

export function Card({ title, icon: Icon, children }: CardProps) {
  return (
    <Container>
      <CardTitleWrapper>
        <h3>{title}</h3>
        {Icon && <Icon size={24} />}
      </CardTitleWrapper>

      {children}
    </Container>
  );
}

export function TopCard({
  title,
  description,
  children,
  icon: Icon,
}: TopCardProps) {
  return (
    <ContainerTopCard>
      <CardTitleWrapper>
        <h3>{title}</h3>
        {Icon && <Icon size={24} />}
      </CardTitleWrapper>
      <TierList>{children}</TierList>
      <h5>{description}</h5>
    </ContainerTopCard>
  );
}

export function LongCard({
  title,
  icon: Icon,
  options,
  description,
  options2,
  description2,
  options3,
  description3,
  options4,
  description4,
}: LongCardProps) {
  return (
    <ContainerLongCard>
      <CardTitleWrapper>
        <h3>{title}</h3>
        {Icon && <Icon size={24} />}
      </CardTitleWrapper>
      <TierLists>
        <TierList>
          {options.map((option) => (
            <span key={option.id}>{option.name}</span>
          ))}
          <h5>{description}</h5>
        </TierList>
        {options2 && (
          <>
            <VerticalDivider />
            <TierList>
              {options2.map((option) => (
                <span key={option.id}>{option.name}</span>
              ))}
              <h5>{description2}</h5>
            </TierList>
          </>
        )}
        {options3 && (
          <>
            <VerticalDivider />
            <TierList>
              {options3.map((option) => (
                <span key={option.id}>{option.name}</span>
              ))}
              <h5>{description3}</h5>
            </TierList>
          </>
        )}
        {options4 && (
          <>
            <VerticalDivider />
            <TierList>
              {options4.map((option) => (
                <span key={option.id}>{option.name}</span>
              ))}
              <h5>{description4}</h5>
            </TierList>
          </>
        )}
      </TierLists>
    </ContainerLongCard>
  );
}
