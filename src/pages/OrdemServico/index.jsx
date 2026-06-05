import React, { useEffect, useMemo, useState } from 'react';
import { Title, AddButton, Page, Content, OrdersGrid } from './style';
import { FaPlus } from "react-icons/fa";
import { FiCalendar, FiClock, FiTool, FiCheckCircle } from 'react-icons/fi';
import InfoCardGrid from '../../components/InfoCardGrid';
import ServiceOrderCard from '../../components/ServiceOrderCard';
import OrdemServicoInput from '../../components/Inputs/OrdemServico';
import CadastroOrdemServicoModal from '../../components/Modais/OrdemServico/Add';
import OrdemServicoEditModal from '../../components/Modais/OrdemServico/Editar';
import OrdemServicoHistoricoModal from '../../components/Modais/OrdemServico/Historico';
import {
    atualizarOrdemServico,
    buscarHistoricoOrdemServico,
    buscarHistoricoGeralOrdemServico,
    cadastrarOrdemServico,
    excluirOrdemServico,
    listarOrdemServico,
} from "../../services/apiOrdemServico.js";
import Alert from "../../utils/alert.js";

export default function OrdemServico() {
    const [ordemServico, setOrdemServico] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingOrder, setEditingOrder] = useState(null);
    const [showHistoryModal, setShowHistoryModal] = useState(false);
    const [historyOrderId, setHistoryOrderId] = useState(null);
    const [historyItems, setHistoryItems] = useState([]);
    const [historyLoading, setHistoryLoading] = useState(false);
    const [historyTitle, setHistoryTitle] = useState('');
    const [showHistoryOrderId, setShowHistoryOrderId] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const statusOptions = [
        { value: 'ABERTO', label: 'Aberto' },
        { value: 'EXECUTANDO', label: 'Executando' },
        { value: 'CONCLUIDO', label: 'Concluido' },
        { value: 'CANCELADO', label: 'Cancelado' },
    ];

    const statusLabelMap = useMemo(() => {
        return statusOptions.reduce((acc, item) => {
            acc[item.value] = item.label;
            return acc;
        }, {});
    }, [statusOptions]);

    const fetchOrdemServico = async () => {
        try {
            const response = await listarOrdemServico();
            const data = response?.data;
            setOrdemServico(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao buscar ordens de serviço:", error);
            Alert("Erro", "Erro ao buscar ordens de serviço"); 
        }
    };

    useEffect(() => {
        fetchOrdemServico();
    }, []);

    const normalizePayload = payload => ({
        tipoDispositivo: payload.tipoDispositivo || '',
        descricao: payload.descricao || '',
        status: payload.status,
        dataAbertura: payload.dataAbertura || null,
        alunoResponsavel: payload.alunoResponsavel ? Number(payload.alunoResponsavel) : null,
        suporteResponsavel: payload.suporteResponsavel ? Number(payload.suporteResponsavel) : null,
    });

    const handleCreate = async data => {
        try {
            await cadastrarOrdemServico(normalizePayload(data));
            setShowModal(false);
            fetchOrdemServico();
        } catch (error) {
            console.error("Erro ao cadastrar ordem de serviço:", error);
        }
    };

    const handleUpdate = async data => {
        if (!editingOrder) return;
        try {
            const payload = {
                ...editingOrder,
                ...data,
            };
            await atualizarOrdemServico(editingOrder.id, normalizePayload(payload));
            setShowEditModal(false);
            setEditingOrder(null);
            fetchOrdemServico();
        } catch (error) {
            console.error("Erro ao atualizar ordem de serviço:", error);
        }
    };

    const handleDelete = async id => {
        try {
            await excluirOrdemServico(id);
            fetchOrdemServico();
        } catch (error) {
            console.error("Erro ao excluir ordem de serviço:", error);
        }
    };

    const handleStatusChange = async (order, nextStatus) => {
        try {
            const payload = {
                ...order,
                status: nextStatus,
            };
            await atualizarOrdemServico(order.id, normalizePayload(payload));
            fetchOrdemServico();
        } catch (error) {
            console.error("Erro ao atualizar status da ordem de serviço:", error);
        }
    };

    const openEditModal = order => {
        setEditingOrder({
            ...order,
            dataAbertura: order?.dataAbertura ? String(order.dataAbertura).slice(0, 10) : '',
        });
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingOrder(null);
    };

    const openHistoryModal = async order => {
        setHistoryOrderId(order.id);
        setHistoryTitle(`Historico da OS #${order.id}`);
        setShowHistoryOrderId(false);
        setShowHistoryModal(true);
        setHistoryLoading(true);
        try {
            const response = await buscarHistoricoOrdemServico(order.id);
            const data = response?.data;
            setHistoryItems(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao buscar historico:", error);
        } finally {
            setHistoryLoading(false);
        }
    };

    const openHistoryAllModal = async () => {
        setHistoryOrderId(null);
        setHistoryTitle('Historico Geral');
        setShowHistoryOrderId(true);
        setShowHistoryModal(true);
        setHistoryLoading(true);
        try {
            const response = await buscarHistoricoGeralOrdemServico();
            const data = response?.data;
            setHistoryItems(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao buscar historico geral:", error);
        } finally {
            setHistoryLoading(false);
        }
    };

    const closeHistoryModal = () => {
        setShowHistoryModal(false);
        setHistoryOrderId(null);
        setHistoryItems([]);
        setHistoryTitle('');
        setShowHistoryOrderId(false);
    };

    const formatDate = value => {
        if (!value) return '-';
        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) return value;
        return parsed.toLocaleDateString('pt-BR');
    };

    const ordemServicoList = Array.isArray(ordemServico) ? ordemServico : [];

    const totals = ordemServicoList.reduce(
        (acc, item) => {
            acc.total += 1;
            if (item.status === 'ABERTO') acc.aberto += 1;
            if (item.status === 'EXECUTANDO') acc.executando += 1;
            if (item.status === 'CONCLUIDO') acc.concluido += 1;
            return acc;
        },
        { total: 0, aberto: 0, executando: 0, concluido: 0 },
    );

    const cards = [
        {
            id: 'total',
            title: 'Total',
            value: totals.total,
            icon: FiCalendar,
            iconColor: '#5a4be7',
            iconBg: '#efedff',
            iconBorderColor: '#e2ddff',
        },
        {
            id: 'scheduled',
            title: 'Abertos',
            value: totals.aberto,
            icon: FiClock,
            iconColor: '#1d4ed8',
            iconBg: '#e8f0ff',
            iconBorderColor: '#d1e1ff',
        },
        {
            id: 'progress',
            title: 'Em Andamento',
            value: totals.executando,
            icon: FiTool,
            iconColor: '#f59e0b',
            iconBg: '#fff3d6',
            iconBorderColor: '#ffe3a6',
        },
        {
            id: 'done',
            title: 'Concluidos',
            value: totals.concluido,
            icon: FiCheckCircle,
            iconColor: '#16a34a',
            iconBg: '#e8f9ef',
            iconBorderColor: '#c7f0d8',
        },
    ];

    //Função de filtragem
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filteredOrders = ordemServicoList.filter(order => {
        if (!normalizedSearch) {
            return true;
        }

        return [
            order.id,
            order.tipoDispositivo,
            order.descricao,
            statusLabelMap[order.status] ?? order.status,
            order.dataAbertura,
            order.alunoResponsavel,
            order.suporteResponsavel,
        ]
            .filter(Boolean)
            .some(value => String(value).toLowerCase().includes(normalizedSearch));
    });

    const onClose = () => setShowModal(false);

    return (
        <Page>
            <Content>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <Title>Ordem de Serviço</Title>
                    <div style={{display: "flex", flexDirection: "row", gap: "12px", flexWrap: "wrap"}}>
                        <AddButton onClick={openHistoryAllModal}>Historico Geral</AddButton>
                        <AddButton onClick={() => setShowModal(true)}> <FaPlus /> Adicionar</AddButton>
                    </div>
                </div>
                <div>
                    <InfoCardGrid items={cards} />
                    <OrdemServicoInput placeholder="Pesquisar..." onChange={setSearchTerm} />
                </div>
                <OrdersGrid>
                    {filteredOrders.map(order => (
                        <ServiceOrderCard
                            key={order.id}
                            alunoResponsavel={order.alunoResponsavel ? `Aluno ${order.alunoResponsavel}` : 'Aluno -'}
                            tipoDispositivo={order.tipoDispositivo}
                            descricao={order.descricao}
                            dataAbertura={formatDate(order.dataAbertura)}
                            status={order.status}
                            statusOptions={statusOptions}
                            onStatusChange={nextStatus => handleStatusChange(order, nextStatus)}
                            onEdit={() => openEditModal(order)}
                            onDelete={() => handleDelete(order.id)}
                            onHistory={() => openHistoryModal(order)}
                        />
                    ))}
                </OrdersGrid>
                    <CadastroOrdemServicoModal
                        isOpen={showModal}
                        onClose={onClose}
                        onSubmit={handleCreate}
                    />
                    <OrdemServicoEditModal
                        open={showEditModal}
                        onClose={closeEditModal}
                        onSubmit={handleUpdate}
                        initialValues={editingOrder}
                    />
                    <OrdemServicoHistoricoModal
                        open={showHistoryModal}
                        onClose={closeHistoryModal}
                        items={historyItems}
                        loading={historyLoading}
                        ordemId={historyOrderId}
                        showOrderId={showHistoryOrderId}
                        title={historyTitle}
                    />
            </Content>
        </Page>
    );
}