import { Button, Card, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableCellName from "./TableCell/Name";
import TableCellNMember from "./TableCell/NMember";

const HOUSEHOLD_URL = "http://localhost:8080/api/household";

const TABLE_HEAD = [
  "#",
  "Số hộ khẩu",
  "Tên chủ hộ",
  "Ngày cập nhật",
  "Địa chỉ",
  "Số thành viên",
];

const ITEMS_PER_PAGE = 6; // Number of items to display per page

function formatDate(dateString) {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toISOString().split("T")[0];
  return formattedDate;
}

export default function HoKhauTable() {
  async function getHouseHolder(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.Name;
  }

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const [tableData, setTableData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, endIndex);

  async function getPerson(url) {
    const response = await fetch(url);
    const data = await response.json();
    setTableData(data);
  }

  useEffect(() => {
    getPerson(HOUSEHOLD_URL);
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
            {currentData.map(
              (
                { id, HouseholdNumber, HouseholderId, updatedAt, Location },
                index
              ) => (
                <tr
                  key={id}
                  className="even:bg-blue-gray-50/50 hover:bg-blue-gray-50 cursor-pointer"
                  onClick={() => navigate(`/hokhau/view/${HouseholderId}`)}
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {HouseholdNumber}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <TableCellName HouseholderId={HouseholderId} />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDate(updatedAt)}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Location}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <TableCellNMember HouseholderId={HouseholderId} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
}
