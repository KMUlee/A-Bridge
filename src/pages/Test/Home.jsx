import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-32 px-44 gap-10">
      <Typography variant="h4">Get started with your user testing</Typography>
      <Typography variant="h5" maxWidth={720}>
        You will perform two types of tests three times, and you will receive 10
        cents at the end. The estimated time is 5 minutes.
      </Typography>
      <div className="w-full flex px-11 gap-8">
        <div className="flex flex-col flex-1 bg-[#F9FAFB] border border-[#B3BCC4] rounded-3xl py-8 items-center gap-6">
          <div className="w-full text-center">
            <Typography>1. UI Test</Typography>
            <Typography>Choosing the best UI for a page</Typography>
          </div>
          <div>
            <img src="/images/testPage/test-1-left.svg" alt="test-ui" />
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-[#F9FAFB] border border-[#B3BCC4] rounded-3xl py-8 items-center gap-6">
          <div className="w-full text-center">
            <Typography>1. UI Test</Typography>
            <Typography>Choosing the best UI for a page</Typography>
          </div>
          <div>
            <img src="/images/testPage/test-1-right.svg" alt="test-ui" />
          </div>
        </div>
      </div>
      <Button variant="contained" color="primary" size="large">
        start!
      </Button>
    </div>
  );
};

export default Home;
