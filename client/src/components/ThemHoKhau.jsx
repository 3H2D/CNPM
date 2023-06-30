import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Select, Option } from "@material-tailwind/react";

export default function ThemHoKhau() {
  const [Name, setName] = useState("");
  const [Birthday, setDob] = useState("");
  const [isMale, setIsMale] = useState(false);
  const [BirthPlace, setHometown] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [nationality, setNationality] = useState("");
  const [CCCD, setCccd] = useState("");
  const [PreviousResidencyAddress, setPreviousResidence] = useState("");
  const [RelationshipWithHouseholder, setRelation] = useState("");
  const [IsHouseholder, setIsHead] = useState(false);
  const [householdId, setHouseholdId] = useState(0);
  const handleChange = (event) => {
    setHouseholdId(event);
  };

  const [householdData, setHouseholdData] = useState([]);
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setHouseholdData(data);
  }

  useEffect(() => {
    getData("http://localhost:8080/api/household");
  }, []);
  if (householdData.length <= 0) return <></>;
  // console.log(householdData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Gender = isMale ? "M" : "F";

    const data = {
      Name,
      Birthday,
      BirthPlace,
      CCCD,
      PreviousResidencyAddress,
      RelationshipWithHouseholder,
      IsHouseholder,
      Gender,
      householdId,
    };

    // console.log(data);
    // TODO: send data to server or use it in your application
    try {
      const response = await axios.post(
        "http://localhost:8080/api/person",
        data
      );
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">
        Thêm nhân khẩu
      </h1>
      <Card color="transparent" className="ml-10 " shadow={false}>
        <Typography
          variant="small"
          color="gray"
          className="flex items-center gap-1 font-normal mt-2"
        >
          <InformationCircleIcon className="w-4 h-4 -mt-px" />
          Điền thông tin vào form dưới đây
        </Typography>
        <form className="mt-2 mb-2 w-[40rem] sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Họ và tên"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <Input
                size="lg"
                label="Ngày sinh"
                type="date"
                value={Birthday}
                onChange={(e) => setDob(e.target.value)}
              />
              <Checkbox
                label="Nam"
                color="blue"
                checked={isMale}
                onChange={(e) => setIsMale(e.target.checked)}
              />
            </div>
            <Input
              size="lg"
              label="Quê quán"
              value={BirthPlace}
              onChange={(e) => setHometown(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <Input
                size="lg"
                label="Dân tộc"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
              />
              <Input
                label="Quốc tịch"
                size="lg"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Input
                label="CCCD"
                size="lg"
                value={CCCD}
                onChange={(e) => setCccd(e.target.value)}
              />
            </div>
            <Input
              label="Nơi thường trú trước khi chuyển đến"
              size="lg"
              value={PreviousResidencyAddress}
              onChange={(e) => setPreviousResidence(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <Input
                label="Quan hệ với chủ hộ"
                size="lg"
                value={RelationshipWithHouseholder}
                onChange={(e) => setRelation(e.target.value)}
              />
              <Select label="Chọn hộ khẩu" onChange={handleChange}>
                {householdData.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.HouseholdNumber}
                  </Option>
                ))}
              </Select>
            </div>
            <Checkbox
              label="Chủ hộ"
              color="blue"
              checked={IsHouseholder}
              onChange={(e) => setIsHead(e.target.checked)}
            />
          </div>
          <Button className="mt-6 " type="submit">
            Thêm
          </Button>
        </form>
      </Card>
    </div>
  );
}
