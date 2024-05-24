// component to show case charts
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chart.js/auto'; // Import the necessary chart components

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const CasesChart: React.FC = () => {
  const { data, isLoading, error } = useQuery<HistoricalData, Error>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const chartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data?.cases || {}),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data?.deaths || {}),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(data?.recovered || {}),
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto">
      <div className="relative h-64 md:h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CasesChart;
