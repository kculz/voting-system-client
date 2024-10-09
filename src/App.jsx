import { Route, Routes } from 'react-router-dom'
import { AddCandidates, AddUser, AdminLogin, Home, Login, Register, Students } from './pages'
import Landing from './pages/Landing'
import { Header, ProtectedRoute } from './components'
import AddAdmin from './pages/AddAdmin';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path='/add-admin' element={<AddAdmin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidates" element={<Home />} />
          <Route path="/add-student" element={<AddUser />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-candidates" element={<AddCandidates />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App
