import React, { useState } from "react";
import { FiEdit2, FiTrash2, FiChevronDown } from "react-icons/fi";
import Swal from "sweetalert2";
import OrdemServicoEditModal from "../../components/Modais/OrdemServico/Editar";
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

export default function ServiceOrderCard(
  {
    nomeCliente,
    produto,
    problemaRelatado,
    dataAgendada,
    status,
    statusOptions = ["Agendado", "Em Andamento", "Concluido"],
    onStatusChange,
    onEdit = () => (onClick = { handleOpenModal }),
  },
  onDelete = () => {
    Swal.fire("Atenção", "Função de exclusão ainda não implementada", "info");
  },
) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientes = [
    { id: "cli-1", name: "Joao Silva" },
    { id: "cli-2", name: "Maria Oliveira" },
  ];

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = () => {
    setIsModalOpen(false);
  };
  return (
    <Card>
      <Header>
        <div>
          <Title>{nomeCliente}</Title>
          <Subtitle>{produto}</Subtitle>
        </div>
        <Actions>
          <button type="button" aria-label="Editar" onClick={handleOpenModal}>
            <FiEdit2 size={16} />
          </button>
          <button type="button" aria-label="Excluir" onClick={onDelete}>
            <FiTrash2 size={16} />
          </button>
        </Actions>
      </Header>

      <InfoBlock>
        <Label>Problema Relatado</Label>
        <Value>{problemaRelatado}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Data Agendada</Label>
        <Value>{dataAgendada}</Value>
      </InfoBlock>

      <StatusWrapper>
        <Label>Status</Label>
        <StatusSelect
          value={status}
          onChange={(event) => onStatusChange?.(event.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StatusSelect>
        <FiChevronDown size={16} />
      </StatusWrapper>
      <OrdemServicoEditModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        clientes={clientes}
      />
    </Card>
  );
}
