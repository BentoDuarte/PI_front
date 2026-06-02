import React, { useState } from 'react';
import {
	Actions,
	Button,
	ButtonGhost,
	Field,
	FieldLabel,
	Form,
	Header,
	ModalCard,
	ModalOverlay,
	Select,
	TextArea,
	TextInput,
	Title,
} from './style';

export default function CadastroOrdemServicoModal({isOpen, onClose }) {
	const [ordemServico, seStOrdem] = useState({
		clientId: '',
		tipoAparelho: '',
		problema: '',
		dataAgendada: '',
		observacoes: '',
	});



	const handleChange = event => {
		const { name, value } = event.target;
		setOrdem(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit?.(ordemServico);
	};

	if (!isOpen) return null;
	return (
		<ModalOverlay onClick={onClose} role="dialog" aria-modal="true">
			<ModalCard onClick={event => event.stopPropagation()}>
				<Header>
					<Title>Nova Ordem de Serviço</Title>
				</Header>
				<Form onSubmit={handleSubmit}>
					<Field>
						<FieldLabel>Cliente</FieldLabel>
						<TextInput name="clientId" value={ordemServico.clientId} onChange={handleChange}/>
					</Field>

					<Field>
						<FieldLabel>Tipo de Dispositivo</FieldLabel>
						<TextInput
							name="tipoAparelho"
							value={ordemServico.tipoAparelho}
							onChange={handleChange}
							placeholder="Ex: Notebook, Smartphone, Tablet..."
						/>
					</Field>

					<Field>
						<FieldLabel>Data Agendada</FieldLabel>
						<TextInput
							name="dataAgendada"
							type="date"
							value={ordemServico.dataAgendada}
							onChange={handleChange}
						/>
					</Field>

					<Field>
						<FieldLabel>Problema Relatado</FieldLabel>
						<TextArea
							name="issue"
							rows={4}
							value={ordemServico.issue}
							onChange={handleChange}
							placeholder="Descreva o problema"
						/>
					</Field>

					<Field>
						<FieldLabel>Observações (opcional)</FieldLabel>
						<TextArea
							name="observacoes"
							rows={3}
							value={ordemServico.observacoes}
							onChange={handleChange}
						/>
					</Field>

					<Actions>
						<ButtonGhost type="button" onClick={onClose}>
							Cancelar
						</ButtonGhost>
						<Button type="submit">Cadastrar</Button>
					</Actions>
				</Form>
			</ModalCard>
		</ModalOverlay>
	);
}
