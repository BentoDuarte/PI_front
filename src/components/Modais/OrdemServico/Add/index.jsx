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
	TextArea,
	TextInput,
	Title,
} from './style';

export default function CadastroOrdemServicoModal({ isOpen, onClose, onSubmit }) {
	const [ordemServico, setOrdemServico] = useState({
		tipoDispositivo: '',
		descricao: '',
		dataAbertura: '',
		alunoResponsavel: '',
		suporteResponsavel: '',
	});



	const handleChange = event => {
		const { name, value } = event.target;
		setOrdemServico(prev => ({ ...prev, [name]: value }));
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
						<FieldLabel>Aluno Responsavel</FieldLabel>
						<TextInput
							name="alunoResponsavel"
							value={ordemServico.alunoResponsavel}
							onChange={handleChange}
							placeholder="ID do aluno"
						/>
					</Field>

					<Field>
						<FieldLabel>Tipo de Dispositivo</FieldLabel>
						<TextInput
							name="tipoDispositivo"
							value={ordemServico.tipoDispositivo}
							onChange={handleChange}
							placeholder="Ex: Notebook, Smartphone, Tablet..."
						/>
					</Field>

					<Field>
						<FieldLabel>Data de Abertura</FieldLabel>
						<TextInput
							name="dataAbertura"
							type="date"
							value={ordemServico.dataAbertura}
							onChange={handleChange}
						/>
					</Field>

					<Field>
						<FieldLabel>Problema Relatado</FieldLabel>
						<TextArea
							name="descricao"
							rows={4}
							value={ordemServico.descricao}
							onChange={handleChange}
							placeholder="Descreva o problema"
						/>
					</Field>

					<Field>
						<FieldLabel>Suporte Responsavel</FieldLabel>
						<TextInput
							name="suporteResponsavel"
							value={ordemServico.suporteResponsavel}
							onChange={handleChange}
							placeholder="ID do suporte"
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
