import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

function FeedbackResponse() {
  const { id } = useParams();
  const [responseData, setResponseData] = useState([]);

  async function getResponse() {
    const response = await fetch(`http://localhost:8080/api/feedback-response`);
    const data = await response.json();
    setResponseData(data);
  }
  useEffect(() => {
    getResponse();
  }, []);

  const response = responseData.find((item) => item.id === parseInt(id));
  if (!response) {
    return (
      <h1 className="text-3xl font-semibold text-blue-gray-700">
        Chưa có phản hồi
      </h1>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold text-blue-gray-700">Nội dung</h1>
      <Typography variant="lead">{response.ResponseContent}</Typography>

      <Typography variant="paragraph">
        Ngày gửi: {response.createdAt}
      </Typography>
    </div>
  );
}

export default FeedbackResponse;
