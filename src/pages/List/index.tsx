import React, {useMemo, useState, useEffect} from 'react';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import formatCurrency from '../../utils/formatCurrency';
import formatData from '../../utils/formatData';


import gains from '../../repositories/entradas';
import espenses from '../../repositories/saidas';


import { Container, Content, Filters } from './styles';

interface IRouteParams {
     match: {
          params: {
               type: string;
          }
     };
};

interface IData {
     description: string;
     amountFromatted: string;
     frequency: string;
     dataFormatted: string;
     tagColor: string;
};
const List: React.FC<IRouteParams> = ({ match }) => {
     const [data, setData] = useState<IData[]>([]);

     const { type } = match.params;
     const title = useMemo(() => {
          return type === 'entry-balance'? {
               desc : 'Entradas',
               color : '#F7931B',
               data: gains
          } : {
               desc : 'Saídas',
               color : '#E44C4E',
               data: espenses
          }
     },[type]);

     useEffect(() => {
          
          setData(title.data.map(
               data => {
                    return {
                         description: data.description,
                         amountFromatted:  formatCurrency(data.amount),
                         frequency:  data.frequency,
                         dataFormatted:  formatData(data.date),
                         tagColor: data.frequency === 'recorrente'? '#4E41F0' : '#E44C4E'
                    }
               }
          ));

     },[]);

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
           <ContentHeader title={title.desc} lineColor={title.color}>
               <SelectInput options={months} />
               <SelectInput options={years} />
           </ContentHeader>

          <Filters>
               <button type="button" className="tag-filter tag-filter-recurrent">Recorrents</button>
               <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
          </Filters>

           <Content>
                { 
                    data.map(item => (
                         <HistoryFinanceCard 
                         key={(new Date()).getTime() * Math.random()}
                         cardColor=""
                         tagColor={item.tagColor}
                         title={item.description}
                         amount={item.amountFromatted}
                         subtitle={item.dataFormatted}
                         />
                    ))
                }
           </Content>
       </ Container>
    );
};

export default List;