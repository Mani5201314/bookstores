import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import AdminLogin from './components/admin/adminLogin';
import AdminPortal from './components/admin/admonPortal';
import UserLogin from './components/user/userlogin';
import UserPortal from './components/user/userportal';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route element={<LandingPage />} path='/' />
      <Route element={<AdminLogin />} path='/adminLogin' />
      <Route element={<AdminPortal />} path='/adminPortal/*' />

      
      <Route element={<UserLogin />} path='/userLogin' />
      <Route element={<UserPortal />} path='/userPortal/*' />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
