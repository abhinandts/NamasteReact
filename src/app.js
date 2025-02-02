
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: < Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< RouterProvider router={appRouter} />);