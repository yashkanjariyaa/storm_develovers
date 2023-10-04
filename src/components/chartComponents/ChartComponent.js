import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartComponent({ data }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      if (data && chartRef.current) {

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        const ctx = chartRef.current.getContext('2d');
        
        chartInstance.current = new Chart(ctx, {
          type: 'bar', // Change to the chart type you want (e.g., 'bar', 'pie', etc.)
          data: data,
        });
      }

      return () => {
        // Clean up: destroy the chart instance when the component unmounts
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };

    }, [data]);
    
    return <canvas ref={chartRef} />;
  }
  