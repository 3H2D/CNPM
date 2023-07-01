import {Link, useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
  PencilIcon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";
import TachKhau from "./TachKhau";
import DoiChuHo from "./DoiChuHo";
function formatDate(dateString) {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toISOString().split("T")[0];
  return formattedDate;
}
export default function HoKhauDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchHouseholderMember = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/person/${id}/member`
        );
        const n = response.data;
        setData(n);
        data.map((item) => {
          if (item.IsHouseholder === true) {
            setName(item.Name);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchHouseholderMember();
  }, [id]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const householderIndex = data.findIndex((member) => member.IsHouseholder);
  if (householderIndex !== -1 && householderIndex !== 0) {
    [data[0], data[householderIndex]] = [data[householderIndex], data[0]];
  }
  const member = data[currentIndex];
  console.log(member);
  if (member === undefined)
    return <h1 className="text-3xl font-semibold text-blue-gray-700"></h1>;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-blue-gray-700 mb-4">
        Hộ khẩu {}
      </h1>

      <div className="flex items-center gap-4 justify-center">
        <Popup
          trigger={
            <Button size="sm" className="flex items-center gap-3">
              <ScissorsIcon strokeWidth={2} className="h-5 w-5" /> Tách khẩu
            </Button>
          }
          modal
        >
          <TachKhau members={data}/>
        </Popup>
        <Popup
          trigger={
            <Button size="sm" className="flex items-center gap-3">
              <PencilIcon strokeWidth={2} className="h-5 w-5" /> Đổi chủ hộ
            </Button>
          }
          modal
        >
          <DoiChuHo members={data}/>
        </Popup>
      </div>
      <div className="flex justify-center">
        <Card className="mt-6 w-96 shadow-xl">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className={
                currentIndex === householderIndex ? "text-red-400 mb-4" : "mb-4"
              }
            >
              {member.Name} {member.IsHouseholder && "(Chủ hộ)"}
            </Typography>
            <table className="w-full min-w-max table-auto text-left">
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography className="mb-2">Căn cước công dân</Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="mb-2">{member.CCCD}</Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography className="mb-2">Ngày sinh</Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="mb-2">
                      {formatDate(member.Birthday)}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography className="mb-2">Nơi sinh</Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="mb-2">
                      {member.PreviousResidencyAddress}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography className="mb-2">Đăng ký tạm trú</Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="mb-2">
                      {formatDate(member.ResidencyRegistrationDate)}
                    </Typography>
                  </td>
                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography className="mb-2">Quan hệ với chủ hộ</Typography>
                  </td>
                  <td className="p-4">
                    <Typography className="mb-2">
                      {member.RelationshipWithHouseholder}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td className="p-4" onClick={()=>navigate(`/nhankhau/view/${member.id}`)}>
                    <Typography className=" hover:text-blue-500 cursor-pointer">Xem chi tiết</Typography>
                  </td>
                </tr>
              </tbody>
            </table>

          </CardBody>
          <CardFooter className="pt-0 flex">
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={handlePrevious}
            >
              <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />
              Quay lại
            </Button>
            <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={handleNext}
            >
              Tiếp <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
