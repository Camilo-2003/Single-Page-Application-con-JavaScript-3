import Header from '../Templates/Header.js';
import Home from '../Pages/Home.js';
import Character from '../Pages/Character.js';
import Error404 from '../Pages/Error404.js';
import getHash from '../Utils/GetHash.js';
import resolveRoutes from '../Utils/ResolveRoutes.js';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;