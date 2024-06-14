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

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const job = [
  "Software",
  "Designer",
  "Student",
  "Management",
  "Marketing",
  "Undefined",
];
const jobWeights = [2, 7, 8, 4, 5, 10];
const locale = ["USA", "Canada", "China", "South Korea", "Germany"];
const education = [
  "High School",
  "Undergraduate",
  "Graduate(Master)",
  "Graduate(PhD)",
  "Undefined",
];
const gender = ["male", "female", "Undefined"];
const birthdate = [10, 20, 30, 40, 50, 60, 70];
const address = [
  "California",
  "New York",
  "Seoul",
  "Busan",
  "Berlin",
  "Undefined",
];
const careerPeriod = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const userId = 123; // userId는 사용자의 id 값으로 설정
const delayTime = 1000; // delayTime은 지연 시간으로 설정

const selectedBirthdate = getRandomElement(birthdate);
const selectedButton = getRandomElement([1, 2]);

const ABTest = () => {
  const nav = useNavigate();
  const handleClick = () => {
    const clickedTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const params = {
      DeliveryStreamName: streamName,
      Record: {
        Data: JSON.stringify({
          testId: 1,
          userId: userId,
          type: "UI",
          isComplete: true,
          currentSeq: 1,
          selectedButton: selectedButton,
          delay: delayTime,
          clickedTime: clickedTime,
          ip: "127.0.0.1",
          job: "Software",
          birthdate: selectedBirthdate,
          gender: getRandomElement(gender),
          educationLevel: getRandomElement(education),
          careerPeriod: getRandomElement(careerPeriod),
          address: getRandomElement(address),
          locale: getRandomElement(locale),
        }),
      },
    };
    firehose.putRecord(params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
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
