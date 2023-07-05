import Admin from "./TableData/Admin.jsx";
import TopBar from "./TopBar.jsx";
import MyBreadcrumbs from "./BreadCrumb.jsx";
import { useContext, useState } from "react";
import ThemHoKhau from "./ThemHoKhau.jsx";
import { SearchProvider } from "./Context/SearchContext.jsx";
import { RoleContext, RoleProvider } from "./Context/RoleContext.jsx";
import User from "./TableData/User.jsx";

function NhanKhau() {
  const [isAddMemberClick, setAddMemberClick] = useState(false);
  const { role } = useContext(RoleContext);
  const notify = () => toast("Wow so easy!");
  const handleAddMemberClick = () => {
    setAddMemberClick(true);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">Nhân khẩu</h1>

      {/*<ToastContainer />*/}
      {isAddMemberClick ? (
        <ThemHoKhau />
      ) : (
        <div>
          <SearchProvider>
            <TopBar />
            {role === 1 ? <Admin /> : <User />}
          </SearchProvider>

        </div>
      )}
    </div>
  );
}

export default NhanKhau;
