import { Button, Typography } from "@mui/material";

const ABTest = ({ setCur }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 py-32">
      <div className="flex flex-col text-center">
        <Typography variant="h4" fontWeight={600}>
          UI Test
        </Typography>
        <Typography variant="h5">Choose the best design you prefer.</Typography>
      </div>
      <div className="w-full flex justify-center items-center gap-20">
        <div className="flex flex-col items-center">
          <div className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl shadow-lg mb-10">
            <img
              className="w-full object-contain"
              src="/images/testPage/ab-test-left.png"
              alt="ab-test"
            />
          </div>
          <div>
            <Button variant="contained" color="primary" size="large">
              select a
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl shadow-lg mb-10">
            <img
              className="w-full"
              src="/images/testPage/ab-test-right.png"
              alt="ab-test"
            />
          </div>
          <div>
            <Button variant="contained" color="primary" size="large">
              select b
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABTest;
