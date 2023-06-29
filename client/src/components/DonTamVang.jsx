import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function DonTamVang() {
  return (
    <div className="justify-center">
      <h1 className="text-3xl font-semibold text-blue-gray-700">
        Đơn tạm vắng
      </h1>
      <Card color="transparent" className="ml-10 mt-10" shadow={false}>
        <Typography
          variant="small"
          color="gray"
          className="flex items-center gap-1 font-normal mt-2"
        >
          <InformationCircleIcon className="w-4 h-4 -mt-px" />
          Điền thông tin vào form dưới đây
        </Typography>
        <form className="mt-2 mb-2 w-[32rem] sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Lý do" />
            <Input size="lg" label="Nơi đến" />
            <div className="flex items-center gap-4">
              <Input
                label="Tạm vắng từ ngày"
                type="date"
                containerProps={{ className: "min-w-[72px]" }}
              />
              <Input
                label="đến ngày"
                type="date"
                containerProps={{ className: "min-w-[72px]" }}
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
}
