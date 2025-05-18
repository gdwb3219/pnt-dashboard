import "bootstrap/dist/css/bootstrap.min.css";

import BasicTabs from "../components/CustomTabPanel";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-container'>
        <div className='dash-title'>
          <h2 className='text-center'>장비 가동률 대시보드</h2>
        </div>
        <div className='dash-tab'>
          <BasicTabs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
