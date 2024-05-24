import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserFlowOne = ({ setPage }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOnClick = () => {
    setIsSelected(true);
  };

  const handleNext = () => {
    setPage({
      curPage: 2,
      totalPage: 2,
    });
  };
  return (
    <>
      <div className="flex px-16 gap-4">
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-1.svg"
          alt="card-1"
          onClick={handleOnClick}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-2.svg"
          alt="card-2"
          onClick={handleOnClick}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-3.svg"
          alt="card-3"
          onClick={handleOnClick}
        />
      </div>
      <div className="w-full px-10 py-4 flex flex-col items-center gap-2">
        <img src="/images/testPage/chip.svg" alt="chip" />
        <Typography variant="h4" fontWeight={600}>
          Pricing Plans
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          At vero eos et accusamus et iusto.
        </Typography>
      </div>
      {isSelected && (
        <div className="absolute left-0 top-0 w-full h-full z-10 px-20 rounded-3xl">
          <div className="absolute left-0 top-0 w-full h-full bg-[#ffffffa3] background-blur rounded-3xl"></div>
          <div className="relative w-full h-full flex flex-col justify-center items-center rounded-3xl gap-6">
            <div>
              <Typography variant="h3" fontWeight={600}>
                Great job!
              </Typography>
              <Typography variant="h3" fontWeight={600}>
                Let's try different version.
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleNext}
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const UserFlowTwo = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="w-full px-16 py-4 gap-2 flex flex-col">
        <div>
          <img src="/images/testPage/chip2.svg" alt="chip" />
        </div>
        <Typography variant="h4" fontWeight={600}>
          Pricing Plans
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti
        </Typography>
      </div>
      <div className="flex gap-4 px-16 py-4">
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-1.svg"
          alt="price-card"
          onClick={() => nav("/result?mode=uf")}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-2.svg"
          alt="price-card"
          onClick={() => nav("/result?mode=uf")}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-3.svg"
          alt="price-card"
          onClick={() => nav("/result?mode=uf")}
        />
      </div>
    </>
  );
};

const UserFlowTest = () => {
  const [page, setPage] = useState({ curPage: 1, totalPage: 2 });
  const userFlowList = [<UserFlowOne setPage={setPage} />, <UserFlowTwo />];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-16 gap-6">
      <div className="w-full text-center">
        <Typography variant="h4" fontWeight={600}>
          UX Test ({`${page.curPage}/${page.totalPage} of testing`})
        </Typography>
        <Typography variant="h5">
          Click Sign up button for middle-priced plan.
        </Typography>
      </div>
      <div className="flex flex-col py-4 bg-white rounded-3xl relative">
        {userFlowList[page.curPage - 1]}
      </div>
    </div>
  );
};

export default UserFlowTest;
