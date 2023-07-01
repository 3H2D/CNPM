import React, {useState} from 'react';
import GenderChart from "./Chart/GenderChart.jsx";
import AgeChart from "./Chart/AgeChart.jsx";
import TemporaryChart from "./Chart/Temporary.jsx";
import {FeedBackChard} from "./Chart/FeedBack.jsx";
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody
} from "@material-tailwind/react";

export default function ThongKe() {
    const [feedback, setFeedback] = useState([]);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    const [open1, setOpen1] = useState(false);
    const toggleOpen1 = () => setOpen1(cur => !cur);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-blue-gray-700 mb-4">Thống kê tổ dân phố 7</h1>
            <Button onClick={toggleOpen} className="m-4">Nhân khẩu</Button>
            <Collapse open={open}>
                <div className="grid grid-cols-3 gap-5">
                    <GenderChart/>
                    <AgeChart/>
                    <TemporaryChart/>
                </div>
            </Collapse>

            <Button onClick={toggleOpen1} className="m-4">Phản ánh & kiến nghị</Button>
            <Collapse open={open1}>
                    <FeedBackChard/>
            </Collapse>

        </div>
    );
}

