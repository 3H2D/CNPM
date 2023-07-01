import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import {Card} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options_1 = {
    plugins: {
        title: {
            display: true,
            text: 'Số lượng đơn phản ánh, kiến nghị dựa trên phản hồi',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

export const options_2 = {
    plugins: {
        title: {
            display: true,
            text: 'Số lượng đơn phản ánh, kiến nghị dựa trên phân loại',
        },
    },
    responsive: true,
};

const labels = [''];


const FEEDBACK_URL = "http://localhost:8080/api/feedback";
const FEEDBACK_RESPONSE_URL = "http://localhost:8080/api/feedback-response";

export function FeedBackChard() {
    const [data, setData] = useState([]);
    const [fbData, setFbData] = useState([]);

    async function getFeedback() {
        const response = await fetch(FEEDBACK_URL);
        const data1 = await response.json();

        const response2 = await fetch(FEEDBACK_RESPONSE_URL);
        const data2 = await response2.json();
        setData(data1);
        setFbData(data2);
    }

    useEffect(() => {
        getFeedback();
    }, []);

    if (data.length <= 0) return;

    let check = fbData.length, unCheck = data.length - fbData.length;

    let p = 0, k = 0, n = 0, x = 0, d = 0, c = 0;
    data.forEach((item) => {
        if (item.Category === "Phản ánh") p++;
        if (item.Category === "Kiến nghị") k++;
        if (item.Category === "Khiếu nại") n++;
        if (item.Status === "xong") x++;
        if (item.Status === "đang xử lý") d++;
        if (item.Status === "chưa xử lý") c++;
    })

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Đã phản hồi',
                data: [check],
                backgroundColor: '#166534',
            },
            {
                label: 'Chưa phản hồi',
                data: [unCheck],
                backgroundColor: '#991b1b',
            },
        ],
    };

    const typeData = {
        labels: ['Phản ánh', 'Kiến nghị', 'Khiếu nại'],
        datasets: [
            {
                label: 'Số lượng',
                data: [p, k, n],
                backgroundColor: [
                    '#22c55e',
                    '#eab308',
                    '#a855f7'
                ],
                borderColor: [
                    '#22c55e',
                    '#eab308',
                    '#a855f7'
                ],
                borderWidth: 1,
            },
        ],
    };

    const statusData = {
        labels: ['Xong', 'Đang xử lý', 'Chưa xử lý'],
        datasets: [
            {
                label: 'Số lượng',
                data: [x, d, c],
                backgroundColor: [
                    '#0284c7',
                    '#fde047',
                    '#ef4444'
                ],
                borderColor: [
                    '#0284c7',
                    '#fde047',
                    '#ef4444'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="grid grid-cols-3 gap-5">
            <Card className="m-4 p-4">
                <Bar options={options_1} data={chartData}/>

            </Card>
            <Card className="m-4 p-4">
                <Pie options={options_2} data={typeData}/>
            </Card>
            <Card className="m-4 p-4">
                <Pie options={options_2} data={statusData}/>
            </Card>
        </div>
    );
}
