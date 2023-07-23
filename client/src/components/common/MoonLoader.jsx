import Loader from "react-spinners/MoonLoader";

const ClockLoader = () => {
  return (
    <Loader
      color="#36d7b7"
      cssOverride={{
        position: "fixed",
        zIndex: 800000,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        borderColor: "red",
      }}
      size={45}
    />
  );
};
export default ClockLoader;
