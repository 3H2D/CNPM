import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@material-tailwind/react";

function TableCellNMember({ HouseholderId }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const fetchHouseholderName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/person/${HouseholderId}/member`
        );
        const n = response.data.length; // Assuming the response contains the name property

        setN(n);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHouseholderName();
  }, [HouseholderId]);

  return (
    <Typography variant="small" color="blue-gray" className="font-normal">
      <p>{n}</p>
    </Typography>
  );
}

export default TableCellNMember;
