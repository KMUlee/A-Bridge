import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ABTest from "./ABTest/ABTest";
import UserFlowTest from "./UserFlowTest/UserFlowTest";

const Testing = () => {
  const [page, setPage] = useState({
    cur: 1,
    total: 3,
  });
  const testList = [
    <ABTest curPage={page.cur} totalPage={page.total} />,
    <UserFlowTest curPage={page.cur} totalPage={page.total} />,
  ];
  return (
    <div className="w-full h-full flex flex-col bg-[#F6F8F9]">
      {testList[1]}
    </div>
  );
};

export default Testing;
