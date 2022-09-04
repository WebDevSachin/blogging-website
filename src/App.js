import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import 'flowbite';
import PublicDashBoard from './pages/PublicDashBoard';
import NotFound from './pages/NotFound';
import Addblogs from './pages/Addblogs';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/" element={<PublicDashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addblog" element={<Addblogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
