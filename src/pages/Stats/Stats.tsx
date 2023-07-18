import { useGetTimer } from "hooks/useGetTimer";

const Stats = () => {
  const { actualTimer } = useGetTimer();

  return <p>статистика</p>;
};

export default Stats;
