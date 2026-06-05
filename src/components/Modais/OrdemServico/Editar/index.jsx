import React, { useEffect, useState } from 'react';
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

export default function OrdemServicoEditModal({
    open,
    onClose,
    onSubmit,
    initialValues,
}) {
    const [form, setForm] = useState({
        tipoDispositivo: '',
        descricao: '',
        dataAbertura: '',
        alunoResponsavel: '',
        suporteResponsavel: '',
        status: 'ABERTO',
    });

    useEffect(() => {
        if (open && initialValues) {
            setForm({
                tipoDispositivo: initialValues.tipoDispositivo ?? '',
                descricao: initialValues.descricao ?? '',
                dataAbertura: initialValues.dataAbertura ?? '',
                alunoResponsavel: initialValues.alunoResponsavel ?? '',
                suporteResponsavel: initialValues.suporteResponsavel ?? '',
                status: initialValues.status ?? 'ABERTO',
            });
        }
    }, [open, initialValues]);

    if (!open) return null;

    const handleChange = event => {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit?.(form);
    };

    return (
        <ModalOverlay onClick={onClose} role="dialog" aria-modal="true">
            <ModalCard onClick={event => event.stopPropagation()}>
                <Header>
                    <Title>Editar Ordem de Servico</Title>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Field>
                        <FieldLabel>Aluno Responsavel</FieldLabel>
                        <TextInput
                            name="alunoResponsavel"
                            value={form.alunoResponsavel}
                            onChange={handleChange}
                            placeholder="ID do aluno"
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Tipo de Dispositivo</FieldLabel>
                        <TextInput
                            name="tipoDispositivo"
                            value={form.tipoDispositivo}
                            onChange={handleChange}
                            placeholder="Ex: Notebook, Smartphone, Tablet..."
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Problema Relatado</FieldLabel>
                        <TextArea
                            name="descricao"
                            rows={4}
                            value={form.descricao}
                            onChange={handleChange}
                            placeholder="Descreva o problema"
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Data de Abertura</FieldLabel>
                        <TextInput
                            name="dataAbertura"
                            type="date"
                            value={form.dataAbertura}
                            onChange={handleChange}
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Status</FieldLabel>
                        <Select name="status" value={form.status} onChange={handleChange}>
                            <option value="ABERTO">Aberto</option>
                            <option value="EXECUTANDO">Executando</option>
                            <option value="CONCLUIDO">Concluido</option>
                            <option value="CANCELADO">Cancelado</option>
                        </Select>
                    </Field>

                    <Field>
                        <FieldLabel>Suporte Responsavel</FieldLabel>
                        <TextInput
                            name="suporteResponsavel"
                            value={form.suporteResponsavel}
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
