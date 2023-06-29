import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

export default function TachKhau() {
  return (
    <Card className="mt-6 w-96 shadow-2xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Tách khẩu
        </Typography>

        <div className="w-72 mt-4">
          <Select label="Chọn chủ hộ mới">
            <Option>1</Option>
          </Select>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Ok</Button>
      </CardFooter>
    </Card>
  );
}
