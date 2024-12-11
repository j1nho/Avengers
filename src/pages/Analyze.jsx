import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import Header from "../component/Header";
import Aside from "../component/Aside";
import './Analyze.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analyze = () => {
    const weeklyData = {
        labels: ['12월 1주차', '12월 2주차', '12월 3주차', '12월 4주차'],
        datasets: [{
            label: '주간 지출',
            data: [350000, 250000, 300000, 200000],
            borderColor: '#E87D7D',
            backgroundColor: 'rgba(232, 125, 125, 0.5)',
            tension: 0.3
        }]
    };

    const categoryData = {
        labels: ['식비', '여행/숙박', '생활', '교통', '기타'],
        datasets: [{
            data: [420000, 340000, 380000, 68000, 43320],
            backgroundColor: 'rgba(232, 125, 125, 0.8)',
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="Analyze_wrap">
            <Header />
            <Aside />
            <div className="Analyze_container">
                <div className="Analyze_contents">
                    <div className="Analyze_title">
                        <h1>12월 지출 분석</h1>
                    </div>
                    <div className="Analyze_info">
                        <div className="Analyze_infoContents">
                            <div className="Analyze_contents01">
                                <div className="chart-container">
                                    <h3>주간별 분석</h3>
                                    <Line data={weeklyData} options={options} />
                                </div>
                                <div className="chart-container">
                                    <h3>이번 달 카테고리별 지출 분석</h3>
                                    <Bar data={categoryData} options={options} />
                                </div>
                            </div>
                            <div className="Analyze_contents02">
                                <div>
                                    <h3>이번 달 총 지출</h3>
                                    <p className="total-expense">350,000원</p>
                                </div>
                                <div>
                                    <h3>12월 고정 지출</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analyze;
