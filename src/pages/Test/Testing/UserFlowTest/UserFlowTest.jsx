import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as AWS from "aws-sdk";

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

const UserFlowOne = ({ setPage }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOnClick = async () => {
    const clickedTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const params = {
      DeliveryStreamName: streamName,
      Record: {
        Data: JSON.stringify({
          test_id: 2,
          user_id: userId,
          type: "UX",
          is_complete: true,
          current_seq: 1,
          selected_button: selectedButton,
          delay: delayTime,
          clicked_time: clickedTime,
          ip: "127.0.0.1",
          job: "Software",
          birthdate: selectedBirthdate,
          gender: getRandomElement(gender),
          education_level: getRandomElement(education),
          career_period: getRandomElement(careerPeriod),
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
    setIsSelected(true);
  };

  const handleNext = () => {
    setPage({
      curPage: 2,
      totalPage: 2,
    });
  };
  return (
    <>
      <div className="flex px-16 gap-4">
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-1.svg"
          alt="card-1"
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-2.svg"
          alt="card-2"
          onClick={handleOnClick}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/pricingCard-1-3.svg"
          alt="card-3"
        />
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
      {isSelected && (
        <div className="absolute left-0 top-0 w-full h-full z-10 px-20 rounded-3xl">
          <div className="absolute left-0 top-0 w-full h-full bg-[#ffffffa3] background-blur rounded-3xl"></div>
          <div className="relative w-full h-full flex flex-col justify-center items-center rounded-3xl gap-6">
            <div>
              <Typography variant="h3" fontWeight={600}>
                Great job!
              </Typography>
              <Typography variant="h3" fontWeight={600}>
                Let's try different version.
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleNext}
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const UserFlowTwo = () => {
  const nav = useNavigate();

  const onClick = async () => {
    const clickedTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const params = {
      DeliveryStreamName: streamName,
      Record: {
        Data: JSON.stringify({
          test_id: 2,
          user_id: userId,
          type: "UX",
          is_complete: true,
          current_seq: 1,
          selected_button: selectedButton,
          delay: delayTime,
          clicked_time: clickedTime,
          ip: "127.0.0.1",
          job: "Software",
          birthdate: selectedBirthdate,
          gender: getRandomElement(gender),
          education_level: getRandomElement(education),
          career_period: getRandomElement(careerPeriod),
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
    nav("/result?mode=uf");
  };
  return (
    <>
      <div className="w-full px-16 py-4 gap-2 flex flex-col">
        <div>
          <img src="/images/testPage/chip2.svg" alt="chip" />
        </div>
        <Typography variant="h4" fontWeight={600}>
          Pricing Plans
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti
        </Typography>
      </div>
      <div className="flex gap-4 px-16 py-4">
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-1.svg"
          alt="price-card"
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-2.svg"
          alt="price-card"
          onClick={onClick}
        />
        <img
          className="cursor-pointer"
          src="/images/testPage/priceCard-2-3.svg"
          alt="price-card"
        />
      </div>
    </>
  );
};

const UserFlowTest = () => {
  const [page, setPage] = useState({ curPage: 1, totalPage: 2 });
  const userFlowList = [<UserFlowOne setPage={setPage} />, <UserFlowTwo />];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-16 gap-6">
      <div className="w-full text-center">
        <Typography variant="h5" fontWeight={400}>
          UX Test ({`${page.curPage}/${page.totalPage} of testing`})
        </Typography>
        <Typography variant="h4" fontWeight={600} color={"#20A1D9"}>
          Click Sign up button for middle-priced plan.
        </Typography>
      </div>
      <div className="flex flex-col py-4 bg-white rounded-3xl relative">
        {userFlowList[page.curPage - 1]}
      </div>
    </div>
  );
};

export default UserFlowTest;
