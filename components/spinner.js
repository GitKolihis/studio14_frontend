/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import { Circles } from "react-loader-spinner";

const  Spinner = () => {
  return (
    <>
      <Circles
        height="25"
        width="25"
        color="#004050"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Spinner;

