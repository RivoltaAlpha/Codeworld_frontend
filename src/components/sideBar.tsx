import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { clearUser } from '../features/users/userSlice';

const Sidebar: React.FC = () => {
//  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  const { isAuthenticated } = useSelector((state: RootState) => state.userAuth);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/home");
  };
  return (
    <div className="w-[200px] min-h-screen bg-cards p-4 space-y-4">
      <nav className="flex flex-col gap-8 space-y-2">
        <Link to="/dashboard" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Dashboard</Link>
        <Link to= {`projects/${user?.user_id}`} className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Projects</Link>
        <Link to="/create-project" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Create Project</Link>
        <Link to="/tasks" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Tasks</Link>
        <Link to="/report" className="hover:underline text-white hover:bg-gray-900 rounded p-2">Report</Link>
        <Link to="/profile" className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Profile</Link>

        {isAuthenticated && (
          <>
            <button onClick={handleLogout} className="hover:underline text-white hover:bg-gray-900 hover:rounded p-2">Logout</button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
