import ABTest from "./ABTest/ABTest";
import UserFlowTest from "./UserFlowTest/UserFlowTest";
import { useRecoilValue } from "recoil";
import { recoilTestId } from "../../../store/recoil";

const Testing = () => {
  const testId = useRecoilValue(recoilTestId);
  const testList = [<ABTest />, <UserFlowTest />];
  return <div className="w-full h-full bg-[#F6F8F9]">{testList[testId]}</div>;
};

export default Testing;
