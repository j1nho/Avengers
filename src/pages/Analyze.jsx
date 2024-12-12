import {Line, Bar} from 'react-chartjs-2';
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
import {Link} from "react-router-dom";
import {KeyboardArrowRight} from "@mui/icons-material";
import {FavoriteBorderOutlined} from "@mui/icons-material"

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
            datasets: [
                {
                    type: 'bar',
                    label: '주간 지출',
                    data: [350000, 250000, 300000, 200000],
                    backgroundColor: '#E87D7D',
                    borderRadius: 5,
                    order: 2
                },
                {
                    type: 'line',
                    label: '주간 지출',
                    data: [350000, 250000, 300000, 200000],
                    borderColor: '#BF2A2A',
                    backgroundColor: 'transparent',
                    tension: 0.3,
                    pointRadius: 6,
                    pointBackgroundColor: '#FFFFFF',
                    pointBorderColor: '#BF2A2A',
                    pointBorderWidth: 2,
                    order: 1
                }
            ]
        };

        let categoryData = {
            labels: ['식비', '여행/숙박', '생활', '교통', '기타'],
            datasets: [{
                data: [420000, 340000, 380000, 68000, 43320],
                backgroundColor: 'rgba(232, 125, 125, 0.5)',
                borderRadius: 5,
            }]
        };

        const option = {
            indexAxis: 'y',  // 가로 방향 차트로 변경
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    formatter: (value) => `${value.toLocaleString()}원`
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#EEEEEE',
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    }
                },
                y: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            maintainAspectRatio: false,
            responsive: true,
            layout: {
                padding: {
                    right: 100 // 오른쪽 여백 추가
                }
            }
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                        color: '#EEEEEE'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }

        return (
            <div className="Analyze_wrap">
                <Header/>
                <Aside/>
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
                                        <Line data={weeklyData} options={options}/>
                                    </div>
                                    <div className="chart-container">
                                        <h3>
                                            이번 달 카테고리별 지출 분석
                                            <span><Link to={'/category'}>더보기</Link><KeyboardArrowRight/></span>
                                        </h3>
                                        <Bar data={categoryData} options={option}/>
                                    </div>
                                </div>
                                <div className="Analyze_contents02">
                                    <div>
                                        <h3>이번 달 총 지출</h3>
                                        <p className="total-expense">350,000원</p>
                                    </div>
                                    <div>
                                        <h3>12월 고정 지출</h3>
                                        <div>
                                            {/* 고정지출 로컬 불러와야함 */}
                                        </div>
                                        <h3>무지출 챌린지</h3>
                                        <div className={"level"}>
                                            <div className={'heart'}>
                                                <FavoriteBorderOutlined style={{color: '#E87D7D'}}/>
                                                <p>3번 달성</p>
                                            </div>
                                            <span>지출 관리 능력이 +1 레벨업 되었어요.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
;

export default Analyze;
