import { useContext, useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import HoKhauTable from "./HoKhauTable";
function HoKhau() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">Hộ khẩu</h1>
      <div className="mt-4 flex items-center justify-end gap-8"></div>
      <div>
        <HoKhauTable />
      </div>
    </div>
  );
}

export default HoKhau;
