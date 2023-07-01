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
            text: 'Số lượng người theo giới tính',
        },
    },
};
export default function GenderChart() {
    const [people, setPeople] = useState([]);

    async function getPerson(url) {
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data);
    }

    useEffect(() => {
        getPerson("http://localhost:8080/api/person")
    }, []);

    let numberOfMale = 0, numberOfFemale = 0;
    people.forEach(person => {
        if (person.Gender === "M") numberOfMale++;
        else numberOfFemale++;
    })
    console.log(numberOfMale, numberOfFemale);

    const data = {
        labels: ['Nam', 'Nữ'],
        datasets: [
            {
                label: 'Số lượng người',
                data: [numberOfMale, numberOfFemale],
                backgroundColor: [
                    '#0ea5e9',
                    '#dc2626',
                ],
                borderColor: [
                    '#0ea5e9',
                    '#dc2626',
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
