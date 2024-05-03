import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, Typography } from "@mui/material";

const Home = ({ user, signOut }) => {
  console.log(user);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Typography variant="h4">Wellcome!!</Typography>
      <div className="w-full flex flex-col justify-center items-center mt-[56px]">
        <Typography variant="h4">
          You have a mission to test user flow.
        </Typography>
        <Typography variant="h4">Let's get started!</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: "56px" }}
      >
        start
      </Button>
    </div>
  );
};

export default withAuthenticator(Home);
