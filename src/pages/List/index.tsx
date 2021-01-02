import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content, Filters } from './styles';
const List: React.FC = () => {
    const months = [
        {value: '7', label: 'Julho'},
        {value: 'Guilherme', label: 'Guilherme'},
        {value: 'Ana', label: 'Ana'}
    ];

    const years = [
     {value: '2020', label: '2020'},
     {value: 'Guilherme', label: 'Guilherme'},
     {value: 'Ana', label: 'Ana'}
 ];

    return (
       <Container>
           <ContentHeader title="Saídas" lineColor="#E44C4E">
               <SelectInput options={months} />
               <SelectInput options={years} />
           </ContentHeader>

          <Filters>
               <button type="button" className="tag-filter tag-filter-recurrent">Recorrents</button>
               <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
          </Filters>

           <Content>
               <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />


<HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
                              <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    amount="R$ 130,00"
                    subtitle="27/07/2020"
               />
               
           </Content>
       </ Container>
    );
};

export default List;