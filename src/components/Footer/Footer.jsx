import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="w-full py-[60px] bg-[#ECF1F5] px-[80px] flex items-center">
      <div className="flex py-11 pr-16 border-r-2">
        <img src="/logo/logoMono.svg" alt="logo" />
      </div>
      <div className="pl-16 flex items-center">
        <div>
          <img src="/icons/aws.svg" alt="aws" />
        </div>
        <div className="flex flex-col pl-10 w-full gap-2">
          <Typography variant="caption">
            Kookmin University I-PBL Program/ AWS Cloud Based Solution Design
          </Typography>
          <Typography variant="caption">
            This project received support from AWS😎
          </Typography>
        </div>
        <div className="flex">
          <Typography variant="caption">
            Copyright © A-Bridge. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
