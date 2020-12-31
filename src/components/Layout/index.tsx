import React from 'react';
import { Container } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Contant from '../Contant';


const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Contant>
            { children }
            </Contant>
        </Container>
    );
};

export default Layout;