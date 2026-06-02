import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	background: #f6f4fb;
`;

export const Content = styled.main`
	flex: 1;
	padding: 32px;
	text-align: left;
`;

export const Title = styled.h1`
	color: #2b2360;
	margin-bottom: 16px;
	font-weight: 600;
`;

export const CardDiv = styled.div`
	padding: 16px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 16px;
	display: flex;
	flex-direction: row;
`;

export const AddButton = styled.button`
	width: 10vw;
	height: 40px;
	padding: 8px 16px;
	background: #3b2f7a;
	color: #fff;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background 0.15s ease;

	&:hover {
		background: #2b2360;
	}
`;

export const Search = styled.input`
  width: 98%;
  height: 30px;
  padding: 8px 12px;
  border: 1px solid #e7e2f2;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 14px;
`; 

export const OrdersGrid = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 16px;
`;