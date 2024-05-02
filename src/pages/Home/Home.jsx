import { Authenticator } from "@aws-amplify/ui-react";
import { Button, TextField, Typography } from "@mui/material";
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <Typography variant="h3">A-Bridge,</Typography>
        <Typography variant="h3">the easiest and fastest bridge to</Typography>
        <Typography variant="h3">define product direction.</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: "56px" }}
      >
        Get Started
      </Button>
      <div className="max-w-2xl mt-[56px]">
        <Typography variant="body1">
          A-Bridge is a dedicated A/B testing platform for startups and
          designers. It allows you to collect and analyze real-time user
          feedback on prototype products. Anyone can easily participate and
          provide diverse feedback.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
