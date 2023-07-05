import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@material-tailwind/react";

function TableCellName({ HouseholderId }) {
  const [householderName, setHouseholderName] = useState("");
  useEffect(() => {
    const fetchHouseholderName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/person/${HouseholderId}/householder`
        );
        const { Name } = response.data; // Assuming the response contains the name property

        setHouseholderName(Name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHouseholderName();
  }, [HouseholderId]);

  return (
    <Typography variant="small" color="blue-gray" className="font-normal">
      <p>{householderName}</p>
    </Typography>
  );
}

export default TableCellName;
