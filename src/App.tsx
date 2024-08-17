import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home'
import Login from './Pages/login';
import Register from './Pages/register';
import UserProjectsList from './user/projects';
import Dashboard from './user/dashboard';
import './index.css'

function App() {

  return (
    <>
      <Router>
      <div className="flex flex-col text-white bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/projects/:user_id" element={<UserProjectsList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
