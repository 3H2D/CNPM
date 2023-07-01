import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
    Typography, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from "@material-tailwind/react";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Số lượng đơn tạm trú & tạm vắng',
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Tạm trú', 'Tạm vắng'];


export default function TemporaryChart() {
    const [temporayAbsence, setTemporayAbsence] = useState([]);
    const [temporaryResidence, setTemporaryResidence] = useState([]);

    //
    async function getTempAbs(url) {
        const response = await fetch(url);
        const data = await response.json();
        setTemporayAbsence(data);
    }
    async function getTempRes(url) {
        const response = await fetch(url);
        const data = await response.json();
        setTemporaryResidence(data);
    }
    useEffect(() => {
        getTempAbs("http://localhost:8080/api/temporary-absence")
        getTempRes("http://localhost:8080/api/temporary-residence")
    }, []);

    if(temporayAbsence.length <= 0) {return ;}
    if(temporaryResidence.length <= 0) {return ;}

    let absCheck = 0, absUnCheck = 0;
    temporayAbsence.forEach(temp => {
        if (temp.check == 1) absCheck++;
        else absUnCheck++;
    })

    let resCheck = 0, resUnCheck = 0;
    temporaryResidence.forEach(temp => {
        if (temp.check == 1) resCheck++;
        else resUnCheck++;
    })

    let max = Math.max(temporayAbsence.length, temporaryResidence.length);
    const data = {
        labels,
        datasets: [
            {
                label: 'Đã xác nhận',
                data: [resCheck, absCheck],
                backgroundColor: '#e11d48',
            },
            {
                label: 'Chưa xác nhận',
                data: [resUnCheck, absUnCheck],
                backgroundColor: '#4338ca',
            },
        ],
    };

    return (
        <>
            <Card className="mt-6">
                <CardBody>
                    <Bar options={options} data={data} />
                </CardBody>
            </Card>

        </>
    );
}
