import React from 'react';
import { useGetVotesByPositionQuery } from '../redux/slices/votes/voteSlice';
import Chart from 'react-apexcharts';

const VoteChart = () => {
  const { data, isLoading, error } = useGetVotesByPositionQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Transform the data to structure with each position as a series and parties on the x-axis
  const positions = Object.keys(data?.data || {}); // e.g., ['President', 'Vice President', 'Secretary General', ...]
  const chartData = positions.map((position) => ({
    name: position,
    data: ['Youth United', 'Campus Voices'].map(
      (party) => data?.data?.[position]?.[party] || 0
    ),
  }));

  // X-axis categories as parties
  const categories = ['Youth United', 'Campus Voices'];

  // ApexChart options with parties on x-axis and each position as a series
  const options = {
    chart: {
      type: 'bar',
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories,
      title: {
        text: 'Parties',
      },
    },
    yaxis: {
      title: {
        text: 'Total Votes',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} votes`,
      },
    },
    legend: {
      position: 'top',
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-center mb-4">Votes stats</h2>
      <Chart options={options} series={chartData} type="bar" height={400} />
    </div>
  );
};

export default VoteChart;