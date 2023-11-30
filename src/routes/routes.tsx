import Navbar from '@/components/Navigation/Navbar';
import useAuth from '@/firebase/useAuth';
import { AdminUsers } from '@/pages/admin/AdminUsers';
import { User } from 'firebase/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calendar, Checkin, Dashboard, Form, Home, Login } from '../pages';

function createAuthRouter(user: User | null) {
    return (
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/checkin" element={<Checkin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/admin" element={<AdminUsers />} />
        </Routes>
    );
}

const AppRouter = () => {
    const user = useAuth();


    return (
        <BrowserRouter>
            {user && <Navbar />} {/* Render Navbar only when user is authenticated */}
            {createAuthRouter(user)}
        </BrowserRouter>
    );
};

export default AppRouter;
