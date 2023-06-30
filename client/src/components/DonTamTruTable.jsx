import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, Checkbox, Typography} from "@material-tailwind/react";
import PhanAnhUser from "./PhanAnhUser.jsx";
import {useNavigate} from "react-router-dom";

const URL = "http://localhost:8080/api/temporary-residence";
const TABLE_HEAD = ["Xác nhận", "Người gửi", "Địa chỉ tạm trú trước", "Từ ngày", "Đến ngày"];

function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
}

export default function DonTamTruTable() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTemporary = async () => {
            try {
                const response = await axios.get(URL);
                const n = response.data;
                setData(n);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTemporary();
    }, []);
    if (data === undefined) return <h1 className="text-3xl font-semibold text-blue-gray-700"></h1>;

    return (

        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(({personId, PreviousResidenceAddress, StartDate, EndDate, check}, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={name}>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {check === 1 ? <Checkbox defaultChecked></Checkbox> : <Checkbox></Checkbox>}
                            </Typography>
                        </td>
                        <td className={classes} onClick={() => navigate(`/nhankhau/view/${personId}`)}>
                            <Typography variant="small" color="blue-gray" className="font-normal hover:cursor-pointer">
                                <PhanAnhUser id={personId}/>
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {PreviousResidenceAddress}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {formatDate(StartDate)}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {formatDate(EndDate)}
                            </Typography>
                        </td>

                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
