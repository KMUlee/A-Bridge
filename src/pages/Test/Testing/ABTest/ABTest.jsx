import { Button, Typography } from "@mui/material";
import { useState } from "react";

const SelectedABTest = ({ text }) => {
  return (
    <div className="w-[420px] h-[560px] bg-[#ECF1F5] flex flex-col justify-between items-center px-10 py-32 rounded-3xl mb-10">
      <Typography>You picked the A card in 8 seconds!</Typography>
      <Typography>Way To Go!</Typography>
    </div>
  );
};

const ABTest = ({ title, curPage, totalPage }) => {
  const [selected, setSelected] = useState({ isSelected: false, card: "" });
  const handleClick = (card) => {
    if (!selected.isSelected) {
      setSelected({ isSelected: true, card: card });
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 py-32">
      <Typography variant="">{title}</Typography>
      <Typography variant="">
        ({`${curPage}/${totalPage} of testing`})
      </Typography>
      <div className="w-full flex justify-center items-center gap-20">
        <div className="flex flex-col items-center">
          {selected.isSelected && selected.card === "A" ? (
            <SelectedABTest />
          ) : (
            <div className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl shadow-lg mb-10">
              <img
                className="w-full object-contain"
                src="/images/testPage/ab-test-left.png"
                alt="ab-test"
              />
            </div>
          )}
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={selected.isSelected && selected.card === "B"}
              onClick={() => handleClick("A")}
            >
              select a
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {selected.isSelected && selected.card === "B" ? (
            <SelectedABTest />
          ) : (
            <div className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl shadow-lg mb-10">
              <img
                className="w-full"
                src="/images/testPage/ab-test-right.png"
                alt="ab-test"
              />
            </div>
          )}
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={selected.isSelected && selected.card === "A"}
              onClick={() => handleClick("B")}
            >
              {selected.card === "B" ? "Next" : "select b"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABTest;
