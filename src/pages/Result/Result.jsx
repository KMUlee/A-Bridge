import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { recoilTestId } from "../../store/recoil";

const UITest = () => {
  return (
    <div className="flex flex-col w-[400px] bg-[#F9FAFB] border border-[#B3BCC4] rounded-3xl py-8 items-center gap-6">
      <div className="w-full text-center">
        <Typography variant="h5" fontWeight={500}>
          1. UI Test
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          Choosing the best UI for a page
        </Typography>
      </div>
      <div>
        <img src="/images/testPage/test-1-left.svg" alt="test-ui" />
      </div>
    </div>
  );
};

const UFTest = () => {
  return (
    <div className="flex flex-col w-[400px] bg-[#F9FAFB] border border-[#B3BCC4] rounded-3xl py-8 items-center gap-6">
      <div className="w-full text-center">
        <Typography variant="h5" fontWeight={500}>
          2. User-flow Test
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          Choosing the best UX for a mission
        </Typography>
      </div>
      <div>
        <img src="/images/testPage/test-1-right.svg" alt="test-ui" />
      </div>
    </div>
  );
};

const Result = () => {
  const nav = useNavigate();
  const setTestId = useSetRecoilState(recoilTestId);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");

  const handleOnClick = () => {
    setTestId(1);
    nav("/test");
  };
  return (
    <div className="w-full h-full flex flex-col items-center py-20 gap-12">
      <div className="w-[720px] mb-4">
        <Typography variant="h3" fontWeight={600}>
          Congratulations, you've
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          completed the test and
        </Typography>
        <Typography variant="h3" fontWeight={600}>
          received{" "}
          <Box component={"span"} color={"primary.main"}>
            2 cents
          </Box>
          !
        </Typography>
      </div>
      <div className="w-[720px]">
        <Typography variant="h4" fontWeight={600}>
          Your current credit: $0.82
        </Typography>
      </div>
      {mode === "ui" ? <UITest /> : <UFTest />}
      <div className="w-[720px] flex flex-col">
        <div>
          <Typography variant="h5" fontWeight={500} textAlign={"left"}>
            Add your feedback for this research (optional)
          </Typography>
        </div>
        <div className="w-full flex flex-col items-start">
          <TextField
            variant="filled"
            fullWidth
            size="medium"
            label="What do you want to comment?"
          />
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleOnClick}
      >
        main page
      </Button>
    </div>
  );
};

export default Result;
