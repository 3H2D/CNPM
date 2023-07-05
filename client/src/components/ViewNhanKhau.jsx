import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {Button, Typography} from "@material-tailwind/react";

const PERSON_URL = "http://localhost:8080/api/person";
function formatDate(dateString) {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toISOString().split("T")[0];
  return formattedDate;
}
export default function ViewNhanKhau() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [houseHolderID, setHouseHolderID] = useState({});

  async function getPerson(url) {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getPerson(PERSON_URL);
  }, []);

  async function getHouseHolderName(url) {
    const response = await fetch(url);
    const data = await response.json();
    setName(data.Name);
    setHouseHolderID(data.id);
  }
  useEffect(() => {
    getHouseHolderName(`${PERSON_URL}/${id}/householder`);
  }, []);

  const person = data.find((person) => person.id === parseInt(id));
  if (person === undefined)
    return <h1 className="text-3xl font-semibold text-blue-gray-700"></h1>;
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">
        Xem thông tin nhân khẩu {person.Name}
      </h1>
      <div className="flex justify-end">
      <Button size="sm" onClick={()=>navigate(`/nhankhau/edit/${id}`)}>Cập nhật thông tin</Button>
      </div>
      <table className="w-full min-w-max table-auto text-left">
        <tbody>
          <tr
            className="even:bg-blue-gray-50/50 hover:bg-blue-gray-50 cursor-pointer"
            onClick={() => navigate(`/nhankhau/view/${houseHolderID}`)}
          >
            <td className="p-4">
              <Typography className="mb-2 ">Chủ hộ</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">{name}</Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Căn cước công dân</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">{person.CCCD}</Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Ngày sinh</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {formatDate(person.Birthday)}
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Giới tính</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {person.Gender === "M" ? "Nam" : "Nữ"}
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Nơi sinh</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {person.PreviousResidencyAddress}
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Đăng ký tạm trú</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {formatDate(person.ResidencyRegistrationDate)}
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Quan hệ với chủ hộ</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {person.RelationshipWithHouseholder}
              </Typography>
            </td>
          </tr>
          <tr className="even:bg-blue-gray-50/50">
            <td className="p-4">
              <Typography className="mb-2">Thông tin liên quan</Typography>
            </td>
            <td className="p-4">
              <Typography className="mb-2">
                {person.Info} <br></br>{" cập nhật lần cuối: "}
                {formatDate(person.updatedAt)}
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
