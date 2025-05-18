import 'bootstrap/dist/css/bootstrap.min.css';

import BasicTabs from '../components/CustomTabPanel';

const Dashboard = () => {
  return (
    <div>
      <h2 className="mb-4 text-center">장비 가동률 대시보드</h2>
      <BasicTabs />
    </div>
  );
};

export default Dashboard;
