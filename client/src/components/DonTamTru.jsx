<<<<<<< HEAD

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function DonTamTru() {
  return (
    <div className="content-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h1" color="blue-gray">
          Đơn tạm trú
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 content-evenly">
          {/* <div className="mb-4 flex flex-col gap-6 content-evenly">
            <Input label="Name"
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}/>
            <Input label="Email"
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}/>
            <Input type="password" size="lg" label="Password" />
          </div> */}
          <div className="mb-4 flex flex-col gap-6">
              <Input type="Họ và tên" size="lg" label="Họ và tên" />  
          </div>
          <div className="my-4 flex items-center gap-4">
            <Input
              label="Ngày, tháng, năm sinh"
              maxLength={5}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label="Giới tính"
              maxLength={4}
              containerProps={{ className: "min-w-[72px]" }}
            />
          </div>
          <div className="mb-4 flex flex-col gap-6">
            <Input type="CMND số" size="lg" label="CMND số" />  
            <Input type="Hộ chiếu số" size="lg" label="Hộ chiếu số" /> 
          </div>
          <div className="my-4 flex items-center gap-4">
            <Input
              label="Tạm trú từ ngày"
              maxLength={5}
              containerProps={{ className: "min-w-[72px]" }}
            />
            <Input
              label="Tới ngày"
              maxLength={4}
              containerProps={{ className: "min-w-[72px]" }}
            />
          </div>
          <div className="my-4 flex items-center gap-4">
              <Input type="Lý do tạm trú" size="lg" label="Lý do tạm trú" />   
          </div>
          <Button className="mt-6" fullWidth>
            Gửi đơn
          </Button>
        </form>
      </Card>
    </div>
  );
=======
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {InformationCircleIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DonTamTru() {
    const [reason, setReason] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const check = 0;
        const personId = 5;
        const data = {
            reason,
            StartDate: fromDate,
            EndDate: toDate,
            PreviousResidenceAddress: address,
            check: check,
            personId: personId,
        }
        // console.log(data)
        try {
            const response = await axios.post(
                "http://localhost:8080/api/temporary-residence",
                data
            );
            const notify = () => toast("Đã gửi đơn thành công!");
            notify();
        } catch (error) {
            console.log(error);
            const notify = () => toast("Đã xảy ra lỗi!");
            notify()
        }
    }
    return (
        <div className="justify-center">
            <h1 className="text-3xl font-semibold text-blue-gray-700">Đơn tạm trú</h1>
            <Card color="transparent" className="ml-10 mt-10" shadow={false}>
                <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center gap-1 font-normal mt-2"
                >
                    <InformationCircleIcon className="w-4 h-4 -mt-px"/>
                    Điền thông tin vào form dưới đây
                </Typography>
                <form className="mt-2 mb-2 w-[32rem] sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Địa chỉ thường trú trước" onChange={(e) => setAddress(e.target.value)}/>
                        <Input size="lg" label="Lý do" onChange={(e) => setReason(e.target.value)}/>
                        <div className="flex items-center gap-4">
                            <Input
                                label="Từ ngày"
                                type="date"
                                containerProps={{className: "min-w-[72px]"}}
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                            <Input
                                label="Đến ngày"
                                type="date"
                                containerProps={{className: "min-w-[72px]"}}
                                onChange={(e) => setToDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button className="mt-6" type="submit">
                        Gửi
                    </Button>
                </form>
            </Card>
        </div>
    );
>>>>>>> f933faf719a64aade775e55a473a38aed8a8ef24
}
