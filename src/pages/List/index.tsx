import React, {useMemo, useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import formatCurrency from '../../utils/formatCurrency';
import formatData from '../../utils/formatData';
import listMonth from '../../utils/listMonth';

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
     const [monthSelected, setMonthSelected] = useState<string>(String((new Date()).getMonth() + 1));
     const [yearSelected, setYearSelected] = useState<string>(String((new Date()).getUTCFullYear()));
     

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
          
          setData(
               title.data.filter(
                    item => {
                         const date = new Date(item.date);
                         const month = String(date.getMonth() + 1);
                         const year = String(date.getFullYear());
                         return (month === monthSelected && year === yearSelected);
                    }
               ).map(
                    data => {
                         return {
                              description: data.description,
                              amountFromatted:  formatCurrency(data.amount),
                              frequency:  data.frequency,
                              dataFormatted:  formatData(data.date),
                              tagColor: data.frequency === 'recorrente'? '#4E41F0' : '#E44C4E'
                         }
                    }
               )
          );
     },[monthSelected, title.data, yearSelected]);

    const months = useMemo(() => {
          return listMonth.map((month, index) => ({value: index + 1, label: month}));
    },[]);

    const years = useMemo(() => {
         let uniqueYears : number[] = [];
         title.data.forEach(n => {
              const date = new Date(n.date);
              const year = date.getFullYear();
              if(!uniqueYears.includes(year)) {
                    uniqueYears.push(year);
              }
         });
         return uniqueYears.map(year => ({label: year, value: year}))
    },[title.data]);


    return (
       <Container>
           <ContentHeader title={title.desc} lineColor={title.color}>
               <SelectInput options={months} onChange={e => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
               <SelectInput options={years} onChange={e => setYearSelected(e.target.value)} defaultValue={yearSelected} />
           </ContentHeader>

          <Filters>
               <button type="button" className="tag-filter tag-filter-recurrent">Recorrents</button>
               <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
          </Filters>

           <Content>
                { 
                    data.map(item => (
                         <HistoryFinanceCard 
                         key={uuid()}
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