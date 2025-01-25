
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<AppLayout />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
);