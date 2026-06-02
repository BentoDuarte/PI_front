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

export default function OrdemServicoEditModal({
    open,
    onClose,
    onSubmit,
    clients = [],
}) {
    const [form, setForm] = useState({
        clientId: '',
        deviceType: '',
        issue: '',
        scheduledDate: '',
        notes: '',
    });

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
                        <FieldLabel>Cliente</FieldLabel>
                        <Select name="clientId" value={form.clientId} onChange={handleChange}>
                            <option value="">Selecione um cliente</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>
                                    {client.name}
                                </option>
                            ))}
                        </Select>
                    </Field>

                    <Field>
                        <FieldLabel>Tipo de Dispositivo</FieldLabel>
                        <TextInput
                            name="deviceType"
                            value={form.deviceType}
                            onChange={handleChange}
                            placeholder="Ex: Notebook, Smartphone, Tablet..."
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Problema Relatado</FieldLabel>
                        <TextArea
                            name="issue"
                            rows={4}
                            value={form.issue}
                            onChange={handleChange}
                            placeholder="Descreva o problema"
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Data Agendada</FieldLabel>
                        <TextInput
                            name="scheduledDate"
                            type="date"
                            value={form.scheduledDate}
                            onChange={handleChange}
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Observações (opcional)</FieldLabel>
                        <TextArea
                            name="notes"
                            rows={3}
                            value={form.notes}
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
