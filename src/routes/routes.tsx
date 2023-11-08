import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Calendar, Checkin, Dashboard, Form, Home, Login } from '../pages';
import { User } from 'firebase/auth';
import useAuth from '../firebase/useAuth';
import { Navbar } from '../components';

function createAuthRouter(user: User | null) {
    return (
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/calendar" element={<Calendar />} />
        </Routes>
    );
}

const AppRouter = () => {
    const user = useAuth();

    return (
        <BrowserRouter>
            <Navbar />
            {createAuthRouter(user)}
        </BrowserRouter>
    );
};

export default AppRouter;
