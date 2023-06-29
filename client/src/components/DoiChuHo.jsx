import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
const HOUSEHOLDER = "http://localhost:8080/api/household";
export default function DoiChuHo({ members }) {
  const { id } = useParams();
  const [selectedMember, setSelectedMember] = useState("");
  const [idMember, setId] = useState(0);
  const handleChange = (event) => {
    setId(event);
  };

  const ok = (e) => {
    e.preventDefault();
    const data = {
      HouseholderId: idMember,
    };
    axios
      .put(`${HOUSEHOLDER}/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="mt-6 w-96 shadow-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Đổi chủ hộ
        </Typography>

        <div className="w-72 mt-4">
          <Select label="Chọn chủ hộ mới" onChange={handleChange}>
            {members.map((member) => (
              <Option key={member.id} value={member.id}>
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
