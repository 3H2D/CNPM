import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography, Select, Option,
} from "@material-tailwind/react";
import {InformationCircleIcon} from "@heroicons/react/24/solid";
import axios from "axios";


const PERSON_URL = "http://localhost:8080/api/person";

function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
}

export default function EditNhanKhau() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [Info, setInfo] = useState("");

    async function getPerson(url) {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);

    }

    useEffect(() => {
        getPerson(PERSON_URL);
    }, []);


    const person = data.find((person) => person.id === parseInt(id));
    if (person === undefined)
        return <h1 className="text-3xl font-semibold text-blue-gray-700"></h1>;


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            Info,
        }
        // console.log(info)
        try {
            const response = await axios.put(`http://localhost:8080/api/person/${id}`, data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h1 className="text-3xl font-semibold text-blue-gray-700">Sửa thông tin {person.Name}</h1>
            <Card color="transparent" className="ml-10 " shadow={false}>
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2 pt-5"
                >
                    <InformationCircleIcon className="w-4 h-4 -mt-px"/>
                    Điền thông tin vào form dưới đây
                </Typography>
                <form className="mt-2 mb-2 w-[40rem] sm:w-96 pt-5" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Họ và tên"
                            placeholder={person.Name}
                            variant="static"
                            // onChange={(e) => setName(e.target.value)}
                        />
                        <div className="flex items-center gap-4">
                            <Input
                                size="lg"
                                label="Ngày sinh"
                                type="date"
                                value={formatDate(person.Birthday)}
                                // onChange={(e) => setDob(e.target.value)}
                            />
                            <Checkbox
                                label="Nam"
                                color="blue"

                                checked={person.Gender !== "F"}
                                // onChange={(e) => setIsMale(e.target.checked)}
                            />
                        </div>

                        <Input
                            label="CCCD"
                            size="lg"
                            variant="static"

                            placeholder={person.CCCD}
                            // onChange={(e) => setCccd(e.target.value)}
                        />
                        <Input
                            label="Nơi thường trú trước khi chuyển đến"
                            size="lg"
                            variant="static"

                            placeholder={person.PreviousResidencyAddress}
                            // onChange={(e) => setPreviousResidence(e.target.value)}
                        />
                        <Input
                            label="Quan hệ với chủ hộ"
                            size="lg"
                            variant="static"

                            placeholder={person.RelationshipWithHouseholder}
                            // onChange={(e) => setRelation(e.target.value)}
                        />

                        <Input
                            label="Thông tin thêm"
                            size="lg"
                            variant="static"
                            value={Info}
                            placeholder={person.Info}
                            onChange={(e) => setInfo(e.target.value)}
                        />
                    </div>
                    <Button className="mt-6 " type="submit">
                        Cập nhật
                    </Button>
                </form>
            </Card>
        </div>
    );
}
