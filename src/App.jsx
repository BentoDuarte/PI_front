import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Routes from "./routes";

const AppShell = styled.div`
    display: flex;
    min-height: 100svh;
    background: #f6f4fb;
    padding-left: 72px;
`;

const Main = styled.main`
    flex: 1;
    padding: 32px;
    text-align: left;
    box-sizing: border-box;
`;

export default function App() {
   return (
             <AppShell>
                 <Navbar />
                 <Main>
                     <Routes />
                 </Main>
             </AppShell>
   );
}