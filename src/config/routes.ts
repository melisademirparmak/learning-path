import IRoute from '../interfaces/route';

import Home from '../Pages/Home';
import Day from '../Pages/Day';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    {
        path: '/day/:id',
        name: 'Day',
        component: Day,
        exact: true
    },
]

export default routes;