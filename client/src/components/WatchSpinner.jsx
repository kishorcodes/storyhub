import { Oval } from "react-loader-spinner";

const WatchSpinner = () => {
  return (
    <Oval
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default WatchSpinner;
