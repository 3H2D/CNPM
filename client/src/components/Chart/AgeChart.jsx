import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {
    Typography, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from "@material-tailwind/react";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Số lượng người theo độ tuổi',
        },
    },
};
function calculateAge(birthdate) {
    const birthday = new Date(birthdate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthday;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(ageInYears);

    return age;
}

export default function AgeChart() {
    const [people, setPeople] = useState([]);

    async function getPerson(url) {
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data);
    }

    useEffect(() => {
        getPerson("http://localhost:8080/api/person")
    }, []);

    let young = 0, adult = 0, old = 0;
    people.forEach(person => {
        let age = calculateAge(person.Birthday);
        // console.log(age)
        if (age <= 18) young++;
        else if (age <= 55) adult++;
        else old++;
    })

    const data = {
        labels: ['Từ 0-18', 'Từ 18-55', 'Trên 55'],
        datasets: [
            {
                label: 'Số lượng người',
                data: [young, adult, old],
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
    if (data === undefined) return (<></>);

    return (
        <>
            <Card className="mt-6 w-96">
                <CardBody>
                    <Pie data={data} options={options}/>
                </CardBody>

            </Card>

        </>
    );
}
