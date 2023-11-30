import { dashboard, expenses, transactions, trend } from '../utils/Icons'

export const MenuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Add Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Transactions",
        icon: trend,
        link: "/dashboard",
    },
    // {
    //     id: 4,
    //     title: "Expenses",
    //     icon: expenses,
    //     link: "/dashboard",
    // },
]