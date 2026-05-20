import React from "react";
import LiveCallPage from "./LiveCallPage.jsx";
import { useNavigate } from "react-router-dom";

const LivePage = () => {
  const navigate=useNavigate();
  return <LiveCallPage />;
};

export default LivePage;