import React, { useMemo, useState } from 'react';
import {
	Body,
	CloseButton,
	EmptyState,
	FilterGroup,
	FilterLabel,
	FilterSelect,
	Filters,
	Header,
	HistoryItem,
	HistoryList,
	ItemGrid,
	ItemHeader,
	ItemLabel,
	ItemSubtitle,
	ItemTitle,
	ItemValue,
	ModalCard,
	ModalOverlay,
	Title,
} from './style';

const statusLabels = {
	ABERTO: 'Aberto',
	EXECUTANDO: 'Executando',
	CONCLUIDO: 'Concluido',
	CANCELADO: 'Cancelado',
};

const actionLabels = {
	CRIACAO: 'Criacao',
	ATUALIZACAO: 'Atualizacao',
	CANCELAR: 'Cancelamento',
};

const formatDateTime = value => {
	if (!value) return '-';
	const parsed = new Date(value);
	if (Number.isNaN(parsed.getTime())) return value;
	return parsed.toLocaleString('pt-BR');
};

export default function OrdemServicoHistoricoModal({
	open,
	onClose,
	items = [],
	loading = false,
	ordemId,
	showOrderId = false,
	title,
}) {
	const [actionFilter, setActionFilter] = useState('');
	const [statusFilter, setStatusFilter] = useState('');
	const filteredItems = useMemo(() => {
		return items.filter(item => {
			if (actionFilter && item.acao !== actionFilter) return false;
			if (statusFilter && item.status !== statusFilter) return false;
			return true;
		});
	}, [items, actionFilter, statusFilter]);

	if (!open) return null;

	return (
		<ModalOverlay onClick={onClose} role="dialog" aria-modal="true">
			<ModalCard onClick={event => event.stopPropagation()}>
				<Header>
					<Title>{title || `Historico da OS ${ordemId ? `#${ordemId}` : ''}`}</Title>
					<CloseButton type="button" onClick={onClose}>
						Fechar
					</CloseButton>
				</Header>
				<Body>
					<Filters>
						<FilterGroup>
							<FilterLabel>Acao</FilterLabel>
							<FilterSelect
								value={actionFilter}
								onChange={event => setActionFilter(event.target.value)}
							>
								<option value="">Todas</option>
								<option value="CRIACAO">Criacao</option>
								<option value="ATUALIZACAO">Atualizacao</option>
								<option value="CANCELAR">Cancelamento</option>
							</FilterSelect>
						</FilterGroup>
						<FilterGroup>
							<FilterLabel>Status</FilterLabel>
							<FilterSelect
								value={statusFilter}
								onChange={event => setStatusFilter(event.target.value)}
							>
								<option value="">Todos</option>
								<option value="ABERTO">Aberto</option>
								<option value="EXECUTANDO">Executando</option>
								<option value="CONCLUIDO">Concluido</option>
								<option value="CANCELADO">Cancelado</option>
							</FilterSelect>
						</FilterGroup>
					</Filters>
					{loading && <EmptyState>Carregando historico...</EmptyState>}
					{!loading && filteredItems.length === 0 && (
						<EmptyState>Sem historico cadastrado.</EmptyState>
					)}
					{!loading && filteredItems.length > 0 && (
						<HistoryList>
							{filteredItems.map(item => (
								<HistoryItem key={item.id ?? `${item.osId}-${item.versao}`}>
									<ItemHeader>
										<ItemTitle>
											Versao {item.versao}
										</ItemTitle>
										<ItemSubtitle>
											{formatDateTime(item.dataEvento)}
										</ItemSubtitle>
									</ItemHeader>
									<ItemGrid>
										{showOrderId && (
											<div>
												<ItemLabel>OS</ItemLabel>
												<ItemValue>{item.osId ?? '-'}</ItemValue>
											</div>
										)}
										<div>
											<ItemLabel>Acao</ItemLabel>
											<ItemValue>
												{actionLabels[item.acao] ?? item.acao}
											</ItemValue>
										</div>
										<div>
											<ItemLabel>Status</ItemLabel>
											<ItemValue>
												{statusLabels[item.status] ?? item.status}
											</ItemValue>
										</div>
										<div>
											<ItemLabel>Tipo</ItemLabel>
											<ItemValue>{item.tipoDispositivo || '-'}</ItemValue>
										</div>
										<div>
											<ItemLabel>Descricao</ItemLabel>
											<ItemValue>{item.descricao || '-'}</ItemValue>
										</div>
									</ItemGrid>
								</HistoryItem>
							))}
						</HistoryList>
					)}
				</Body>
			</ModalCard>
		</ModalOverlay>
	);
}
