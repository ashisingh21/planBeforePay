import { dashboard, expenses, transactions, trend,money ,dollar,piggy,card} from '../utils/Icons'

export const MenuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: './dashboard'
    },
     {
        id: 2,
   
         title: 'Plan',
        icon: money,
        link: './plan'
    },
    {
        id: 3,
        title: "Transactions",
        icon: transactions,
        link: "./transaction",
    },
    {
        id: 4,
        title: "Incomes",
        icon: trend,
        link: "./income",
    },
    {
        id: 5,
        title: "Expenses",
        icon: expenses,
        link: "./expense",
    },
    {
        id: 6,
        title: "Savings",
        icon: piggy,
        link: "./saving",
    },
]