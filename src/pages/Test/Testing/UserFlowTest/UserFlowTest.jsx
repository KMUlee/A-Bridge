import { Typography } from "@mui/material";

const UserFlowTest = ({ curPage, totalPage }) => {
  return (
    <div className="w-full h-full flex flex-col items-center py-16 gap-6">
      <div className="w-full text-center">
        <Typography>Click Sign up button for middle-priced plan.</Typography>
        <Typography>({`${curPage}/${totalPage} of testing`})</Typography>
      </div>
      <div className="flex flex-col py-4 bg-white rounded-3xl">
        <div className="flex px-16 gap-4">
          <img src="/images/testPage/pricingCard-1-1.svg" alt="card-1" />
          <img src="/images/testPage/pricingCard-1-2.svg" alt="card-2" />
          <img src="/images/testPage/pricingCard-1-3.svg" alt="card-3" />
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
      </div>
    </div>
  );
};

export default UserFlowTest;
