import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
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
import { RoleContext} from "./LogIn.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {SearchContext} from "./SearchContext.jsx";

export default function TopBar({ onAddMemberClick }) {
  const { role } = useContext(RoleContext);
  const { setSearchQuery } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }
  console.log(role);
  return (
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mt-2 flex items-center justify-between gap-8">
            <div className="w-full md:w-72">
              <Input
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  label="Tìm kiếm"
                  onChange={handleSearch}
              />
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link to="/hokhau/themnhankhau">
                <Button
                    className="flex items-center gap-3"
                    color="blue"
                    size="sm"
                    onClick={onAddMemberClick}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm nhân khẩu
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
  );
}
