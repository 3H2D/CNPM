
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function DonTamVang() {
  return (
    <div className="content-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h1" color="blue-gray">
          Đơn tạm vắng
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
              label="Tạm vắng từ ngày"
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
              <Input type="Lý do tạm vắng" size="lg" label="Lý do tạm vắng" />   
          </div>
          <Button className="mt-6" fullWidth>
            Gửi đơn
          </Button>
        </form>
      </Card>
    </div>
  );
}
