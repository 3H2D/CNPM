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
    return <p>Không tìm thấy phản hồi</p>;
  }
  return (
    <div>
      <Typography variant="h3" color="blue" textGradient>
        Nội dung
      </Typography>
      <Typography variant="lead">{response.ResponseContent}</Typography>

      <Typography variant="paragraph">
        Ngày gửi: {response.createdAt}
      </Typography>
    </div>
  );
}

export default FeedbackResponse;
