import React, { useState } from 'react';
import { Title, AddButton, Page, Content, OrdersGrid } from './style';
import { FaPlus } from "react-icons/fa";
import { FiCalendar, FiClock, FiTool, FiCheckCircle } from 'react-icons/fi';
import InfoCardGrid from '../../components/InfoCardGrid';
import ServiceOrderCard from '../../components/ServiceOrderCard';
import OrdemServicoInput from '../../components/Inputs/OrdemServico';
import OrdemServicoAddModal from '../../components/Modais/OrdemServico/Add';

export default function OrdemServico() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cards = [
        {
            id: 'total',
            title: 'Total',
            value: 2,
            icon: FiCalendar,
            iconColor: '#5a4be7',
            iconBg: '#efedff',
            iconBorderColor: '#e2ddff',
        },
        {
            id: 'scheduled',
            title: 'Agendados',
            value: 1,
            icon: FiClock,
            iconColor: '#1d4ed8',
            iconBg: '#e8f0ff',
            iconBorderColor: '#d1e1ff',
        },
        {
            id: 'progress',
            title: 'Em Andamento',
            value: 1,
            icon: FiTool,
            iconColor: '#f59e0b',
            iconBg: '#fff3d6',
            iconBorderColor: '#ffe3a6',
        },
        {
            id: 'done',
            title: 'Concluidos',
            value: 0,
            icon: FiCheckCircle,
            iconColor: '#16a34a',
            iconBg: '#e8f9ef',
            iconBorderColor: '#c7f0d8',
        },
    ];

    const orders = [
        {
            id: 'os-1',
            nomeCliente: 'Joao Silva',
            produto: 'Notebook',
            problema: 'Tela quebrada',
            dataAgendada: '27/05/2024',
            status: 'Agendado',
        },
        {
            id: 'os-1',
            nomeCliente: 'Joao Silva',
            produto: 'Notebook',
            problema: 'Tela quebrada',
            dataAgendada: '27/05/2024',
            status: 'Agendado',
        },
        {
            id: 'os-1',
            nomeCliente: 'Joao Silva',
            produto: 'Notebook',
            problema: 'Tela quebrada',
            dataAgendada: '27/05/2024',
            status: 'Agendado',
        },
    ];

    const clientes = [
        { id: 'cli-1', name: 'Joao Silva' },
        { id: 'cli-2', name: 'Maria Oliveira' },
        { id: 'cli-3', name: 'Carlos Santos' },
        { id: 'cli-4', name: 'Ana Costa' },
    ];

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleSubmit = () => {
        setIsModalOpen(false);
    };

    return (
        <Page>
            <Content>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", justifyContent: "space-between"}}>
                    <Title>Ordem de Serviço</Title>
                    <AddButton onClick={handleOpenModal}> <FaPlus /> Adicionar</AddButton>
                </div>
                <div>
                    <InfoCardGrid items={cards} />
                    <OrdemServicoInput placeholder="Pesquisar..." />
                </div>
                <OrdersGrid>
                    {orders.map(order => (
                        <ServiceOrderCard
                            key={order.id}
                            nomeCliente={order.nomeCliente}
                            produto={order.produto}
                            problema={order.problema}
                            dataAgendada={order.dataAgendada}
                            status={order.status}
                        />
                    ))}
                </OrdersGrid>
                    <OrdemServicoAddModal
                        open={isModalOpen}
                        onClose={handleCloseModal}
                        onSubmit={handleSubmit}
                        clientes={clientes}
                    />
            </Content>
        </Page>
    );
}