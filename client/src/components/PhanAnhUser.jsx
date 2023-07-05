import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Typography } from "@material-tailwind/react";

function PhanAnhUser({ id }) {
    const [name, setName] = useState("");
    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/person/${id}`
                );
                const  Name  = response.data[0].Name;
                setName(Name);
            } catch (error) {
                console.log(error);
            }
        };

        fetchName();
    }, [id]);

    if(name == null) return (<Typography variant="small" color="blue-gray" className="font-normal"> ... </Typography>)
    return (
        <Typography variant="small" color="blue-gray" className="font-normal hover:text-blue-500">
            <p>{name}</p>
        </Typography>
    );
}

export default PhanAnhUser;
