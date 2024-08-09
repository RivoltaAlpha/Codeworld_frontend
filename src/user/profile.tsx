import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { NavLink } from 'react-router-dom';

export default function Profile() {
    const { user } = useSelector((state: RootState) => state.userAuth);
    return (
        <div className="max-w-2xl mx-auto p-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center justify-center mb-6">
                        <img 
                            src= {user?.image_url || '/images/Social media-cuate.png'} 
                            alt="User Profile" 
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-4 text-center">User Details</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-900 p-3 rounded">
                            <span className="font-semibold">Name:</span> {user?.username}
                        </div>
                        <div className="bg-gray-900 p-3 rounded">
                            <span className="font-semibold">Email:</span> {user?.email}
                        </div>
                    </div>
                    <div className="mt-6 flex flex-row justify-between" >
                        <div className="mt-6 flex ">
                            <NavLink to="/users/dashboard" className="px-4 py-2 bg-cards text-white rounded mr-2">Dashboard</NavLink>
                        </div>
                        <div className="mt-6 ">
                            <NavLink to="/users/edit-profile" className="px-4 py-2 bg-red-400 text-white rounded mr-2">Edit Profile</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}