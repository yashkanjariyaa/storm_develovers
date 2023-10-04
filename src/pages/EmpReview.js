import React from 'react';
// import ProductivityChart from './components/chartComponents/ProductivityChart.js';
// import Chart from '../components/chartComponents/RetentionChart.js';
// import Chart from '../components/chartComponents/ParticipationChart.js';
import Chart from '../components/chartComponents/ChartComponent';

function EmpReview() {
  // Sample data (replace with your actual data)
  const productivityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Productivity',
        data: [85, 92, 78, 88, 90],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const retentionData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Retention Rate',
        data: [85, 88, 90, 92],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const participationData = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="EmpReview">
      <h1>Employee Metrics</h1>
      {/* <Chart data={productivityData} /> */}
      <Chart data={retentionData} />
      {/* <Chart data={participationData} /> */}
    </div>
  );
}

export default EmpReview;
