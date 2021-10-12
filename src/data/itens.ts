import { Item } from "../types/Item";

export const items: Item[] = [
    {
        date: new Date(2021, 9, 15),
        category: 'food', 
        title: 'McDonalds', 
        value: 32.12
    },
    {
        date: new Date(2021, 9, 16),
        category: 'food', 
        title: 'OutBack', 
        value: 85
    },
    {
        date: new Date(2021, 9, 16),
        category: 'rent', 
        title: 'Aluguel Apt', 
        value: 800
    },
    {
        date: new Date(2021, 10, 5),
        category: 'salary', 
        title: 'Salário', 
        value: 3600
    },
];