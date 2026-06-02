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
	width: min(520px, 100%);
	background: #ffffff;
	border-radius: 18px;
	box-shadow: 0 24px 60px rgba(18, 20, 43, 0.2);
	padding: 28px;
	display: grid;
	gap: 16px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	margin: 0;
	color: #1f1a3d;
	font-size: 22px;
	font-weight: 600;
`;

export const Form = styled.form`
	display: grid;
	gap: 14px;
`;

export const Field = styled.label`
	display: grid;
	gap: 6px;
	color: #312b57;
	font-size: 13px;
	font-weight: 600;
`;

export const FieldLabel = styled.span`
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

export const TextInput = styled.input`
	${baseInput}
`;

export const TextArea = styled.textarea`
	${baseInput}
	resize: vertical;
	min-height: 96px;
`;

export const Select = styled.select`
	${baseInput}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 12px;
	margin-top: 10px;
`;

export const Button = styled.button`
	border: none;
	background: #4f39f6;
	color: #ffffff;
	padding: 10px 22px;
	border-radius: 12px;
	font-weight: 600;
	cursor: pointer;
`;

export const ButtonGhost = styled.button`
	border: 1px solid #d5d1e3;
	background: #ffffff;
	color: #312b57;
	padding: 10px 22px;
	border-radius: 12px;
	font-weight: 600;
	cursor: pointer;
`;
