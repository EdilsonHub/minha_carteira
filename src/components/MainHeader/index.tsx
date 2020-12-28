import React, {useMemo} from 'react';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { 
    Container,
    Profile,
    UserName,
    Welcome
 } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => emojis[Math.floor(Math.random() * emojis.length)],[]);
    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Ola, {emoji}</Welcome>
                <UserName>Edilson Pereira da Silva</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;