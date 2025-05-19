import 'bootstrap/dist/css/bootstrap.min.css';

import BasicTabs from '../components/CustomTabPanel';
import './Dashboard.css';
import axios from 'axios';
import { useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiURL = 'http://127.0.0.1:8000/factor/';
      const response = await axios.get(apiURL);

      console.log('API 응답 데이터', response.data);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return <div>Loading data...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching data: {error.message}</div>;
  // }

  return (
    <div>
      <div className="dashboard-container">
        <div className="dash-title">
          <h2 className="text-center">장비 가동률 대시보드</h2>
          <button onClick={fetchData}>데이터 버튼</button>
        </div>
        <div className="dash-tab">
          <BasicTabs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
