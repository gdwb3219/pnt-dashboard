import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import UtilChart from '../components/UtilChart';
import BasicTabs from '../components/CustomTabPanel';

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">장비 가동률 대시보드</h2>
      <BasicTabs />
    </Container>
  );
};

export default Dashboard;
