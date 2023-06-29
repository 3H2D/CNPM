import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserIcon,
  UserGroupIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BellAlertIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import { TDP_NAME } from "../const";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RoleContext } from "./Context/RoleContext";

function Sidebar(props) {
  const navigate = useNavigate();
  const { role } = useContext(RoleContext);

  return (
    <Card className="top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-150">
      <div className="mb-2 flex items-center gap-4 p-4">
        <ListItemPrefix>
          <BuildingOfficeIcon className="h-9 w-9" />
        </ListItemPrefix>
        <Typography variant="h5" color="blue-gray">
          {TDP_NAME}
        </Typography>
      </div>
      <List>
        <ListItem onClick={() => navigate("/nhankhau")}>
          <ListItemPrefix>
            <UserIcon className="h-5 w-5" />
          </ListItemPrefix>
          Nhân khẩu
        </ListItem>
        {role === 1 ? (
          <ListItem onClick={() => navigate("/hokhau")}>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Hộ khẩu
          </ListItem>
        ) : (
          <></>
        )}
        <ListItem onClick={() => navigate("/phananh")}>
          <ListItemPrefix>
            <BellAlertIcon className="h-5 w-5" />
          </ListItemPrefix>
          Phản ánh - kiến nghị
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Hòm thư
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Tài khoản
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Cài đặt
        </ListItem>
        <ListItem onClick={() => navigate("/login")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Đăng xuất
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;
