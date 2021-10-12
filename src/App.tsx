import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { TableArea } from './components/TableArea/TableArea';
import { items } from './data/itens';
import { Item } from './types/Item';
import { filterListByMonth, getCurrentMonth } from './utils/dateFilter';

const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

    useEffect(() => {
        setFilteredList( filterListByMonth(list, currentMonth) );
    }, [list, currentMonth])

    return(
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>

            <C.Body>
                {/* Área de informações */}
                
                {/* Área de inserção */}

                {/* Tabela de Itens */}
                <TableArea list={filteredList}/>
            </C.Body>
        </C.Container>
    );
}

export default App;