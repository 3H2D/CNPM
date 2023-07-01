import {Button, Card, Typography} from "@material-tailwind/react";
import {useContext, useEffect, useState} from "react";
import {SearchContext} from "../Context/SearchContext.jsx";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {DEFAULT_USER} from "../../const.js";
import {IdContext} from "../Context/IdContext.jsx";



const TABLE_HEAD = [
    "Tên",
    "Ngày sinh",
    "Giới tính",
    "Nơi sinh",
    "Quan hệ với chủ hộ",
    "Căn cước công dân",
];

const ITEMS_PER_PAGE = 6; // Number of items to display per page

function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
}

export default function User() {
    const { id } = useContext(IdContext);
    const USER_ID = id;
    const PERSON_URL = `http://localhost:8080/api/person/${USER_ID}/member`;

    const navigate = useNavigate();

    const [tableData, setTableData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = tableData.slice(startIndex, endIndex);

    const {searchQuery} = useContext(SearchContext);

    const filteredData = currentData.filter((item) =>
        item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    async function getPerson(url) {
        const response = await fetch(url);
        const data = await response.json();
        setTableData(data);
    }

    useEffect(() => {
        getPerson(PERSON_URL);
    }, []);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

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
    const person = tableData.find((item) => item.id === USER_ID);
    let isNotificationDisplayed = false;

    if (person != null) {
        // const notify = () => {
        //     if (!isNotificationDisplayed) {
        //         toast(`Chào mừng Mr.${person.Name} quay trở lại!`);
        //         isNotificationDisplayed = true;
        //     }
        // };
        //
        // notify();
    }
    return (
        <>
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
                    {filteredData.map(
                        (
                            {
                                id,
                                Name,
                                Birthday,
                                IsHouseholder,
                                Gender,
                                PreviousResidencyAddress,
                                CCCD,
                                RelationshipWithHouseholder,
                            },
                            index
                        ) => (
                            <tr key={id}
                                className={IsHouseholder ? "even:bg-blue-gray-50/50 " : "even:bg-blue-gray-50/50"}
                                onClick={() => navigate(`/nhankhau/view/${id}`)}>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className={IsHouseholder ? "font-bold text-red-500 hover:cursor-pointer" : "font-normal hover:cursor-pointer hover:text-blue-500"}
                                    >
                                        {Name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {formatDate(Birthday)}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {Gender === "F" ? "Nữ" : "Nam"}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {PreviousResidencyAddress}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {RelationshipWithHouseholder}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {CCCD}
                                    </Typography>
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
        </>
    );
}
