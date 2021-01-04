import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import {
    Container
} from './styles';


const Dashbord: React.FC = () => {
    const options = [
        {value: 'edilson', label : 'edilson'},
        {value: 'ana', label : 'ana'},
        {value: 'guilhreme', label : 'guilhreme'}
    ];
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={() => {}} />
            </ContentHeader>
        </Container>
    );
};

export default Dashbord;