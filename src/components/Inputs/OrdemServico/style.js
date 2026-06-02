import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export const InputWrapper = styled.div`
  position: relative;
  width: 98%;
  margin-top: 16px;
`;

export const Input = styled.input`
  width: 98%;
  height: 30px;
  padding: 8px 12px 8px 36px;
  border: 1px solid #e7e2f2;
  border-radius: 8px;
  font-size: 14px;
`; 

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b6375;
  width: 14px;
  height: 14px;
`;