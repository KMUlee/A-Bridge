import { Button, TextField, Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        <Typography variant="h3">A-Bridge,</Typography>
        <Typography variant="h3">the easiest and fastest bridge to</Typography>
        <Typography variant="h3">define product direction.</Typography>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-[16px] mt-[56px]">
        <TextField
          label="ID"
          variant="filled"
          size="medium"
          sx={{ width: "30%" }}
        />
        <TextField
          label="Password"
          variant="filled"
          size="medium"
          sx={{ width: "30%" }}
        />
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
