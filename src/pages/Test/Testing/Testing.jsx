import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ABTest from "./ABTest/ABTest";
import UserFlowTest from "./UserFlowTest/UserFlowTest";

const Testing = () => {
  const [cur, setCur] = useState(0);
  const testList = [
    <ABTest setCur={setCur} />,
    <UserFlowTest setCur={setCur} />,
  ];
  return <div className="w-full h-full bg-[#F6F8F9]">{testList[cur]}</div>;
};

export default Testing;
