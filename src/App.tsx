import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/home'
import Login from './Pages/login';
import Register from './Pages/register';
import UserProjectsList from './user/projects';
import ProjectDetails from './user/projectDetails';
import CreateProjectForm from './user/createProject'; 
import CreateTask from './user/taskCreation'; 
import Dashboard from './user/dashboard';
import TaskList from './user/projectTasks';
import UserTasksList from './user/userTasks';
import Profile from './user/profile';
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
          <Route path="/dashboard/project-details/:project_id" element={<ProjectDetails />} />
          <Route path='/dashboard/create-project' element={<CreateProjectForm />}/>
          <Route path='/dashboard/create-task' element={<CreateTask />}/>
          <Route path='/dashboard/user-tasks/:user_id' element={<UserTasksList />}/>
          <Route path='/dashboard/project-tasks/:project_id' element={<TaskList />}/>
          <Route path='/dashboard/profile' element={<Profile />}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
