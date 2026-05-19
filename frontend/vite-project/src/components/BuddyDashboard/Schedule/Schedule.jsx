// App.jsx

import { useNavigate } from 'react-router-dom';
import Dashboard from './ScheduleDashboard.jsx'

const Schedule = () => {
    const navigate=useNavigate();
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Dashboard />
    </div>
  );
};

export default Schedule;