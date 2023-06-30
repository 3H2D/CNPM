import {useContext, useEffect, useState} from "react";
import {Chip, Button, Card, Typography} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";
import PhanAnhUser from "./PhanAnhUser.jsx";

const FEEDBACK_URL = "http://localhost:8080/api/feedback";
const FEEDBACK_RESPONSE_URL = "http://localhost:8080/api/feedback-response";

const TABLE_HEAD = [
    "Người phản ánh",
    "Nội dung",
    "Ngày gửi",
    "Phân loại",
    "Trạng thái",
    "Phản hồi",
];
const ITEMS_PER_PAGE = 4; // Number of items to display per page
function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
}

function PhanAnh() {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = tableData.slice(startIndex, endIndex);

    const navigate = useNavigate();
    const handleNavigate = (responseId) => {
        navigate(`/phananh/phanhoi/${responseId}`);
    };

    async function getFeedback(feedback_url) {
        const response = await fetch(feedback_url);
        const data = await response.json();

        const response2 = await fetch(FEEDBACK_RESPONSE_URL);
        const data2 = await response2.json();

        const updatedData = data.map((item) => {
            const matchingObject = data2.find((obj) => obj.feedbackId === item.id);
            if (matchingObject) {
                return {
                    ...item,
                    ResponseContent: matchingObject.ResponseContent,
                    ResponseId: matchingObject.id,
                };
            }
            return item;
        });
        setTableData(updatedData);
    }

    useEffect(() => {
        getFeedback(FEEDBACK_URL);
    }, []);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <div>
            <h1 className="text-3xl font-semibold text-blue-gray-700">
                Phản ánh & Kiến nghị
            </h1>
            <div>
                <Card className="overflow-scroll h-full w-full mt-4">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {currentData.map(
                            (
                                {
                                    id,
                                    Content,
                                    createdAt,
                                    Category,
                                    Status,
                                    personId,
                                    ResponseContent,
                                    ResponseId,
                                },
                                index
                            ) => (
                                <tr key={id} className="even:bg-blue-gray-50/50">
                                    <td className="p-4" onClick={() => navigate(`/nhankhau/view/${personId}`)}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal hover:underline cursor-pointer hover:text-light-blue-500"
                                        >
                                            <PhanAnhUser id={personId}/>
                                        </Typography>
                                    </td>
                                    <div className="break-words">
                                        <td className="p-4 max-w-lg">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {Content}
                                            </Typography>
                                        </td>
                                    </div>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {formatDate(createdAt)}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <div className="w-max">
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                value={Category}
                                                color={
                                                    Category === "Kiến nghị"
                                                        ? "green"
                                                        : Status === "Khiếu nại"
                                                            ? "amber"
                                                            : "red"
                                                }
                                            />
                                        </div>
                                    </td>

                                    <td className="p-4">
                                        <div className="w-max">
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                value={Status}
                                                color={
                                                    Status === "xong"
                                                        ? "green"
                                                        : Status === "đang xử lý"
                                                            ? "amber"
                                                            : "red"
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleNavigate(ResponseId)}
                                            className="text-blue-500 underline"
                                        >
                                            {ResponseContent !== undefined ? "1" : "0"}
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                </Card>
                <div className="flex justify-center mt-4 space-x-4">
                    <Button
                        color="blue"
                        size="sm"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                    >
                        Trước
                    </Button>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        {`Trang ${currentPage} trên ${totalPages}`}
                    </Typography>
                    <Button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        color="blue"
                        size="sm"
                    >
                        Tiếp
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PhanAnh;
