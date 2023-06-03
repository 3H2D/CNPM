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
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { TDP_NAME } from "../const";

function Sidebar(props) {
  return (
    <Card className="top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-150">
      <Typography variant="h5" className="text-blue-500">
        {TDP_NAME}
      </Typography>
      <List>
        <ListItem
          onClick={() => {
            props.click("hokhau");
          }}
        >
          <ListItemPrefix>
            <UserIcon className="h-5 w-5" />
          </ListItemPrefix>
          Hộ khẩu
        </ListItem>
        <ListItem
          onClick={() => {
            props.click("phananh");
          }}
        >
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
        <ListItem
          onClick={() => {
            return (window.location.href = "/login");
          }}
        >
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
