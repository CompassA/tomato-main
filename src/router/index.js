import Index from '@/container/Index'
import About from '@/container/About/About'
import User from '@/container/User'
import Item from '@/container/Item'

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/item",
        component: Item
    },
    {
        path: "/user",
        component: User
    },
]

export default routes