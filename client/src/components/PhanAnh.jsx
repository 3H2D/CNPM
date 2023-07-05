import PhanAnhData from "./PhanAnhData.jsx";
import PhanAnhForm from "./PhanAnhForm.jsx";
import {useContext} from "react";
import {RoleContext} from "./Context/RoleContext.jsx";

function PhanAnh() {
    const {role} = useContext(RoleContext)
    return (
        <div>
            <h1 className="text-3xl font-semibold text-blue-gray-700">
                Phản ánh & Kiến nghị
            </h1>
            {role === 1 ? <PhanAnhData/> : <PhanAnhForm/>}

        </div>
    );
}

export default PhanAnh;
