import { Button, Typography } from "@mui/material";
import { useState } from "react";
import ABTest from "./ABTest/ABTest";

const Testing = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#F6F8F9]">
      <ABTest
        title={"Choose the best design you prefer."}
        curPage={1}
        totalPage={3}
      />
    </div>
  );
};

export default Testing;
