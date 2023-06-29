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
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "./Context/SearchContext.jsx";
import { RoleContext } from "./Context/RoleContext.jsx";

export default function TopBar() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const { setSearchQuery } = useContext(SearchContext);

  const { role } = useContext(RoleContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <>
        {role === 1 ? (
          <>
            <div className="mt-2 flex items-center justify-between gap-8">
              <div className="w-full md:w-72">
                <Input
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  label="Tìm kiếm"
                  onChange={handleSearch}
                />
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button
                  className="flex items-center gap-3"
                  color="blue"
                  size="sm"
                  onClick={() => handleNavigate("/nhankhau/themnhankhau")}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm nhân
                  khẩu
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 flex items-center justify-between gap-8">
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row"></div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button
                  className="flex items-center gap-3"
                  color="blue"
                  size="sm"
                  onClick={() => handleNavigate("/nhankhau/dontamvang")}
                >
                  <ArrowLeftOnRectangleIcon
                    strokeWidth={2}
                    className="h-4 w-4"
                  />{" "}
                  Làm đơn tạm vắng
                </Button>
                <Button
                  className="flex items-center gap-3"
                  color="blue"
                  size="sm"
                  onClick={() => handleNavigate("/nhankhau/dontamtru")}
                >
                  <ArrowRightOnRectangleIcon
                    strokeWidth={2}
                    className="h-4 w-4"
                  />{" "}
                  Làm đơn tạm trú
                </Button>
              </div>
            </div>
          </>
        )}
      </>
    </CardHeader>
  );
}
