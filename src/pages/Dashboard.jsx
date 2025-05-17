import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TableGrid from "../components/TableGrid";

const data = [
  { month: "1월", utilization: 75 },
  { month: "2월", utilization: 82 },
  { month: "3월", utilization: 68 },
  { month: "4월", utilization: 90 },
  { month: "5월", utilization: 74 },
];

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("전체");

  const handleSelect = (e) => {
    setSelectedMonth(e);
  };

  return (
    <Container className='mt-4'>
      <h2 className='mb-4 text-center'>장비 가동률 대시보드</h2>

      <Row className='mb-3'>
        <Col md={3}>
          <DropdownButton
            title={`월 선택: ${selectedMonth}`}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey='전체'>전체</Dropdown.Item>
            {data.map((d) => (
              <Dropdown.Item eventKey={d.month} key={d.month}>
                {d.month}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>

      <Row>
        <TableGrid data={data} />
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>월별 가동률</Card.Title>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={data}>
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='utilization' fill='#007bff' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col md={4}>
          <Card bg='success' text='white'>
            <Card.Body>
              <Card.Title>평균 가동률</Card.Title>
              <Card.Text>
                {Math.round(
                  data.reduce((sum, d) => sum + d.utilization, 0) / data.length
                )}
                %
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* 필요한 카드 더 추가 가능 */}
      </Row>
    </Container>
  );
};

export default Dashboard;
