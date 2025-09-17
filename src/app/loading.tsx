import { RingLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="h-full mt-36 w-full flex justify-center items-center">
      <RingLoader
        className="w-1/2 h-1/2 "
        loading={true}
        color="#1F1F1F"
        size={400}
      />
    </div>
  );
};
export default Loader;
