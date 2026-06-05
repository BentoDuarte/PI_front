import React from "react";
import { FiEdit2, FiTrash2, FiChevronDown, FiClock } from "react-icons/fi";
import {
  Actions,
  Card,
  Header,
  Title,
  Subtitle,
  InfoBlock,
  Label,
  Value,
  StatusSelect,
  StatusWrapper,
} from "./style";

export default function ServiceOrderCard({
  alunoResponsavel,
  tipoDispositivo,
  descricao,
  dataAbertura,
  status,
  statusOptions = [],
  onStatusChange,
  onEdit,
  onDelete,
  onHistory,
}) {
  return (
    <Card>
      <Header>
        <div>
          <Title>{alunoResponsavel}</Title>
          <Subtitle>{tipoDispositivo}</Subtitle>
        </div>
        <Actions>
          <button type="button" aria-label="Historico" onClick={onHistory}>
            <FiClock size={16} />
          </button>
          <button type="button" aria-label="Editar" onClick={onEdit}>
            <FiEdit2 size={16} />
          </button>
          <button type="button" aria-label="Excluir" onClick={onDelete}>
            <FiTrash2 size={16} />
          </button>
        </Actions>
      </Header>

      <InfoBlock>
        <Label>Problema Relatado</Label>
        <Value>{descricao}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Data de Abertura</Label>
        <Value>{dataAbertura}</Value>
      </InfoBlock>

      <StatusWrapper>
        <Label>Status</Label>
        <StatusSelect
          value={status}
          onChange={(event) => onStatusChange?.(event.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StatusSelect>
        <FiChevronDown size={16} />
      </StatusWrapper>
    </Card>
  );
}
