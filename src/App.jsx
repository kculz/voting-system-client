import { Route, Routes } from 'react-router-dom';
import { AddCandidates, AddUser, AdminLogin, Candidate, Home, Login, NoInternet, Register, Students, VoteChart, Winner } from './pages';
import Landing from './pages/Landing';
import { AdminProtectedRoute, Dashboard, Footer, Header, Layout, NotFound, ProtectedRoute, VoteStatsTable } from './components';
import AddAdmin from './pages/AddAdmin';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import Admins from './pages/Admins';

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path='/*' element={<NotFound />} />
  
          <Route element={<ProtectedRoute />}>
            <Route path='/winners' element={<Winner />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/candidates" element={<Home />} />
          </Route>
  
          <Route element={<AdminProtectedRoute />} >
  
            <Route element={<Layout />}>
                <Route path='/admins' element={<Admins />} />
                <Route path="/add-admins" element={<AddAdmin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="/add-students" element={<AddUser />} />
                <Route path="/all-students" element={<Students />} />
                <Route path="/all-candidates" element={<Candidate />} />
                <Route path="/add-candidates" element={<AddCandidates />} />
                <Route path="/turnout" element={<VoteStatsTable />} />
              </Route>
  
          </Route>
                <Route path='/vote-chart' element={<VoteChart />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </>
      ) : (
        <NoInternet />
      )}
    </div>
  );
};

export default App;
