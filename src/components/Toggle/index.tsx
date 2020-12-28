import React from 'react';
import { isPropertySignature } from 'typescript';

import { 
    Container,
    ToggleLabel,
    ToggleSelector 
} from './styles';

const Toggle: React.FC = () => (
        <Container>
            <ToggleLabel>Ligtht</ToggleLabel>
            <ToggleSelector 
                checked
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={() => console.log('mudou coisas')}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
);

export default Toggle;