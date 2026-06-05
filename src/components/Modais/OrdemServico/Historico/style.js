import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(18, 20, 43, 0.45);
	display: grid;
	place-items: center;
	padding: 24px;
	z-index: 20;
`;

export const ModalCard = styled.div`
	width: min(720px, 100%);
	background: #ffffff;
	border-radius: 18px;
	box-shadow: 0 24px 60px rgba(18, 20, 43, 0.2);
	padding: 28px;
	display: grid;
	gap: 18px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`;

export const Title = styled.h2`
	margin: 0;
	color: #1f1a3d;
	font-size: 22px;
	font-weight: 600;
`;

export const CloseButton = styled.button`
	border: 1px solid #d5d1e3;
	background: #ffffff;
	color: #312b57;
	padding: 8px 16px;
	border-radius: 12px;
	font-weight: 600;
	cursor: pointer;
`;

export const Body = styled.div`
	display: grid;
	gap: 12px;
`;

export const Filters = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 12px;
`;

export const FilterGroup = styled.label`
	display: grid;
	gap: 6px;
`;

export const FilterLabel = styled.span`
	color: #312b57;
	font-size: 13px;
	font-weight: 600;
`;

const baseInput = `
	border-radius: 10px;
	border: 1px solid #d5d1e3;
	padding: 10px 12px;
	font-size: 14px;
	color: #1f1a3d;
	background: #ffffff;
`;

export const FilterSelect = styled.select`
	${baseInput}
`;

export const EmptyState = styled.p`
	margin: 0;
	color: #7a7198;
	font-size: 14px;
`;

export const HistoryList = styled.div`
	display: grid;
	gap: 12px;
`;

export const HistoryItem = styled.div`
	border: 1px solid #efeaf7;
	border-radius: 14px;
	padding: 14px 16px;
	display: grid;
	gap: 10px;
	background: #fbfaff;
`;

export const ItemHeader = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 12px;
	flex-wrap: wrap;
`;

export const ItemTitle = styled.span`
	color: #1f1a3d;
	font-weight: 600;
	font-size: 14px;
`;

export const ItemSubtitle = styled.span`
	color: #7a7198;
	font-size: 13px;
`;

export const ItemGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 8px 16px;
`;

export const ItemLabel = styled.span`
	color: #8a829f;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.4px;
`;

export const ItemValue = styled.span`
	color: #221b4f;
	font-size: 14px;
	font-weight: 500;
`;
