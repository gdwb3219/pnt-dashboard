import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UtilChart from "./charts/UtilChart";
import UtilBarChart from "./charts/UtilBarChart";
import "./TabPannel.css";

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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
          <Tab label='Item Four' {...a11yProps(3)} />
          <Tab label='Item Five' {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel className='tab-pannel' value={value} index={0}>
        <div className='upper-chart'>
          <div className='chart-view-area'>
            <div className='chart-row'>
              <div className='single-chart'>
                <UtilChart />
              </div>
              <div className='single-chart'>
                <UtilChart />
              </div>
              <div className='single-chart'>
                <UtilChart />
              </div>
              <div className='single-chart'>
                <UtilChart />
              </div>
            </div>
          </div>
          <div className='chart-setting'>settings</div>
        </div>
        <div className='upper-chart'>
          <div className='chart-view-area'>
            <div className='chart-row'>
              <div className='single-chart'>
                <UtilChart />
              </div>
            </div>
            <div className='chart-slider'>chart-slider 1</div>
          </div>
          <div className='chart-setting'>settings</div>
        </div>
      </CustomTabPanel>
      {/* <CustomTabPanel className='tab-pannel' value={value} index={1}>
        <div className='upper-chart'>
          Upper Chart
          <div className='single-chart'></div>
          <div className='chart-slider'></div>
        </div>
        <div className='lower-chart'>lower Chart</div>
        <UtilBarChart data={data} />
      </CustomTabPanel>
      <CustomTabPanel className='tab-pannel' value={value} index={2}>
        <div className='upper-chart'>
          Upper Chart
          <div className='single-chart'></div>
          <div className='chart-slider'></div>
        </div>
        <div className='lower-chart'>lower Chart</div>
      </CustomTabPanel> */}
    </Box>
  );
};

export default BasicTabs;
