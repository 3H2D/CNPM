import {Button, Card, CardBody, CardFooter, Option, Select, Typography,} from "@material-tailwind/react";
import axios from "axios";
import React, {useState} from "react";
import {toast} from "react-toastify";

const HOUSEHOLDER = "http://localhost:8080/api/household";

function generateRandomNumber() {
    const min = 100;
    const max = 999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
}

export default function TachKhau({members}) {

    const [selectedMember, setSelectedMember] = useState("");
    const [member, setMember] = useState({});
    const handleChange = (event) => {
        setMember(event);
    };

    const id = members[0].householdId;
    const oldHouseholderId = members[0].id;


    const ok = (e) => {
        e.preventDefault();
        console.log(member)
        const data = {
            HouseholdNumber: generateRandomNumber(),
            Location: member.PreviousResidencyAddress,
            HouseholderId: member.id,

        };
        console.log(data)
        const url = `${HOUSEHOLDER}/${id}`;
        axios
            .post(`http://localhost:8080/api/household`, data)
            .then((res) => {
                console.log(res);
                axios.put(`http://localhost:8080/api/person/${member.id}`, {
                    IsHouseholder: 1,
                    householdId: res.data.id,
                    RelationshipWithHouseholder: "self",
                    Info: "Cập nhật thay đổi thành chủ hộ"
                }).then((res) => {
                    console.log(res)
                }).catch((error) => {
                    console.log(error)
                })
                toast.success("Tách hộ thành công");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Tách hộ thất bại")
            });
    };

    return (
        <Card className="mt-6 w-96 shadow-2xl">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Tách khẩu
                </Typography>

                <div className="w-72 mt-4">
                    <Select label="Chọn chủ hộ mới" onChange={handleChange}>
                        {members.map((member) => (
                            <Option key={member.id} value={member}>
                                {member.Name}
                            </Option>
                        ))}
                    </Select>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={ok}>Ok</Button>
            </CardFooter>
        </Card>
    );
}
