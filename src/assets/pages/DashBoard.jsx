import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export function DashBoard(){

    const data = {
        labels: ['2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years'],
        datasets: [
            {
                label: '# of Votes',
                data: [3, 6, 4, 3, 1, 1, 1, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };
    
    
    
return(
    <article className='chart-container'>
    <h5 className='chart-title'>Our products by age:</h5>
    <Doughnut data={data} />
</article>
)
}


