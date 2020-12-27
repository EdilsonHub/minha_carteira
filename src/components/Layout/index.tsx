import React from 'react';
import { Container } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Contant from '../Contant';


const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Contant />
        </Container>
    );
};

export default Layout;