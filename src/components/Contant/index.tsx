import React from 'react';
import { Container } from './styles';

const Contant: React.FC = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
};

export default Contant;