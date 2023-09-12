import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import "./style.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const chartOptions = {
    plugins: {
        legend: {
            display: false,
            labels: {
                padding: 30,
                usePointStyle: true,
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 300,
            
            title: {
                display: true,
            },
            ticks: {
                stepSize: 50,
            },
            grid: {
                display: true,
                color: "white"
            },
            
        },
        x: {
            grid: {
                display: true,
                color: "white"
            },
        },
    },
};


export const options = {
    responsive: true,
    plugins: {
        title: {
        text: 'Chart.js Bar Chart',
    },
    },
};

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const data = {
    type: "bar",
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 200, 120, 150, 250, 250, 110, 240, 250, 120],
            backgroundColor: 'rgba(255, 250, 250)',
        },
        {
            label: 'Dataset 2',
            data: [150, 300, 100, 250, 190, 220, 100, 250, 50, 200],
            backgroundColor: 'rgba(245, 204, 0)',
        },
    ],
};

const Chart = () =>{    
    return (
        <div className="app-section-chart">
            <div className="app-section-chart-icon">
                <svg width="81" height="78" viewBox="0 0 81 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.304 10.8931V22.2421H53.4752L41.1353 36.5624L28.7955 22.2421H35.2831V10.8931H47.3065H47.304ZM57.7454 29.2499L64.9443 40.2186C65.3392 41.1327 65.815 42.8853 65.815 43.9504V65.0494C65.815 66.1926 64.8658 67.0311 63.7571 67.0311H18.5895C17.4023 67.0311 16.4531 66.1926 16.4531 65.0494V43.9504C16.4531 42.8828 16.848 41.1327 17.2454 40.2186L24.4443 29.2499C24.8392 28.2603 26.2643 27.4218 27.2919 27.4218H30.5345L33.858 31.3071H27.2135L20.8069 42.5806C20.7284 42.5806 20.7284 42.6561 20.7284 42.7341C20.7284 42.8877 20.7284 42.9633 20.6499 43.0388H61.5448V42.7341C61.5448 42.6586 61.4664 42.5806 61.4664 42.505L55.0598 31.3071H48.4152L51.7388 27.4218H54.9028C56.0115 27.4218 57.3556 28.2603 57.7505 29.2499H57.7454ZM35.359 51.2629H46.9876C48.0153 51.2629 48.9645 50.3489 48.9645 49.2813C48.9645 48.2916 48.0153 47.3776 46.9876 47.3776H35.359C34.2503 47.3776 33.3011 48.2916 33.3011 49.2813C33.3011 50.3489 34.2503 51.2629 35.359 51.2629Z" fill="white"/>
                </svg>
            </div>

            <Bar 
                className="app-section-chart-bar"      
                options={chartOptions}
                data={data} 
            />
        </div>
    )      
}

export default Chart;