import React from 'react';
import logoImg from './assets/cartoes-de-credito.svg';
import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md';
import { 
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuLink,
    Title
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Title>Minha carteira</Title>
            </Header>
           <MenuContainer>
               <MenuLink href="/dashboard">
                   <MdDashboard />
                   Dashboard
               </MenuLink>
               <MenuLink href="/list/entry-balance">
                   <MdArrowUpward />
                   Entradas
               </MenuLink>
               <MenuLink href="/list/exit-balance">
                   <MdArrowDownward />
                   Saidas
               </MenuLink>
               <MenuLink href="#">
                   <MdExitToApp />
                   Sair
               </MenuLink>
           </MenuContainer>
        </Container>
    );
};

export default Aside;