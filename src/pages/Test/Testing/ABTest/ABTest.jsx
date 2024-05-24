import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as AWS from "aws-sdk";
import Cookies from "js-cookie";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const firehose = new AWS.Firehose();

const streamName = process.env.REACT_APP_FIREHOSE_STREAM_NAME;

const ABTest = () => {
  const nav = useNavigate();
  const handleClick = () => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 10; j++) {
        const log = {
          test_id: i,
          user_id: "a9a9b9ee-c0a1-70bf-a995-9bd7c392f743",
          type: "UI",
          current_seq: 1,
          is_complete: true,
          delay: 0.880313,
          clicked_time: 17147849036850429,
          selected_button: 1,
          ip: "127.0.0.1",
        };
        const params = {
          DeliveryStreamName: streamName,
          Record: {
            Data: JSON.stringify(log) + "\n", // 로그 데이터를 JSON 문자열로 변환하고 끝에 새 줄 추가
          },
        };
        firehose.putRecord(params, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(data);
          }
        });
      }
    }
    nav("/result?mode=ui");
  };
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
          <div
            className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl hover:shadow-lg mb-10 cursor-pointer"
            onClick={handleClick}
          >
            <img
              className="w-full object-contain"
              src="/images/testPage/ab-test-left.png"
              alt="ab-test"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              select a
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="h-[560px] w-[420px] px-6 flex justify-center items-center bg-white rounded-3xl hover:shadow-lg mb-10 cursor-pointer"
            onClick={handleClick}
          >
            <img
              className="w-full"
              src="/images/testPage/ab-test-right.png"
              alt="ab-test"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleClick}
            >
              select b
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABTest;
