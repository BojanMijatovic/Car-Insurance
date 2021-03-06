import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';
import './UserStatistic.styles.scss';

const UserStatistic = () => {
  return (
    <Container className='user-statistic'>
      <h2 className='user-statistic__name'>Welcome User</h2>
      <Bar
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Income',
              data: [5600, 4200, 3200, 4500, 5500, 6500, 7500],
              backgroundColor: '#337cff',
              borderColor: '#337cff',
              borderWidth: 0,
            },
            {
              label: 'Points',
              data: [2, 13, 5, 7, 8, 9, 10],
              backgroundColor: '#e53b5c',
              borderColor: '#e53b5c',
              borderWidth: 0,
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                scaleLabel: {
                  labelString: 'Month',
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      ></Bar>
    </Container>
  );
};

export default UserStatistic;
