import React, {useContext, useEffect, useState} from 'react';
import {Button, Textarea, Typography, Collapse, CardBody, Card, Chip, CardFooter} from "@material-tailwind/react";
import {InformationCircleIcon, ArrowDownRightIcon, ArrowLongRightIcon} from "@heroicons/react/24/solid";
import {Select, Option} from "@material-tailwind/react";
import axios from "axios";
import {DEFAULT_USER} from "../const.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {IdContext} from "./Context/IdContext.jsx";

function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
}

function PhanAnhForm() {
    const navigate = useNavigate();

    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    async function getFeedback(feedback_url) {
        const response = await fetch(feedback_url);
        const data = await response.json();

        const response2 = await fetch("http://localhost:8080/api/feedback-response");
        const data2 = await response2.json();

        const updatedData = data.map((item) => {
            const matchingObject = data2.find((obj) => obj.feedbackId === item.id);
            if (matchingObject) {
                return {
                    ...item,
                    ResponseContent: matchingObject.ResponseContent,
                    ResponseId: matchingObject.id,
                };
            }
            return item;
        });

        setData(updatedData);
    }

    useEffect(() => {
        getFeedback("http://localhost:8080/api/feedback");
    }, []);

    if (data.length <= 0) {
        return
    }

    const {id} = useContext(IdContext)
    const fb = data.filter((item) => item.personId === id);
    fb.reverse()
    // console.log(fb)
    const toggleOpen = () => setOpen(cur => !cur);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            Content: content,
            Category: category,
            Status: "chưa xử lý",
            personId: DEFAULT_USER,
        }
        try {
            const response = await axios.post("http://localhost:8080/api/feedback", data);
            console.log(response);
            const notify = () => toast("Đã gửi đơn thành công!");
            notify();
        } catch (error) {
            console.log(error);
            const notify = () => toast("Đã xảy ra lỗi!");
            notify()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                >
                    <InformationCircleIcon className="w-4 h-4 -mt-px"/>
                    Điền thông tin vào form dưới đây
                </Typography>
                <div className="w-72 pt-5">
                    <Select label="Chọn" value={category} onChange={(e) => setCategory(e)}>
                        <Option value="Phản ánh">Phản ánh</Option>
                        <Option value="Kiến nghị">Kiến nghị</Option>
                        <Option value="Khiếu nại">Khiếu nại</Option>
                    </Select>
                </div>
                <div className="flex flex-col w-9/12 gap-6 pt-5">
                    <Textarea size="md" label="Nội dung" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <Button type="submit" className="mt-5">Gửi</Button>
            </form>
            <Typography className="mt-5 underline text-blue-500 hover:cursor-pointer hover:text-orange-500"
                        onClick={toggleOpen}>Các đơn trước đây </Typography>
            <Collapse open={open}>
                <div className="flex flex-row gap-5 p-5">
                    {fb.map((item) => (
                        <Card key={item.id} shadow={true} className="w-60">
                            <CardBody>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    {item.Category}
                                </Typography>
                                <Typography variant="body1" color="blue-gray" className="mb-2">
                                    {item.Content}
                                </Typography>
                                <Typography variant="body1" color="blue-gray" className="mb-2">
                                    Ngày tạo: {formatDate(item.createdAt)}
                                </Typography>

                                <Chip value={item.Status} variant="ghost">
                                </Chip>
                                {item.ResponseId ?
                                    <Button variant="text" className="mt-4" onClick={() => navigate(`/phananh/phanhoi/${item.ResponseId}`)}>Xem phản
                                        hồi</Button> : <></>}

                            </CardBody>
                        </Card>
                    ))}
                </div>
            </Collapse>
        </div>

    );
}

export default PhanAnhForm;