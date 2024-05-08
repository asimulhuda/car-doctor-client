import { Button } from "@material-tailwind/react";
import errorImage from "../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="lg:mx-0 mx-5 h-[100vh] space-y-6 flex flex-col items-center justify-center">
      <img src={errorImage} alt="" className="lg:w-1/3 w-full" />
      <Link to="/">
        <Button
          size="lg"
          variant="outlined"
          className="text-[#FF3811] border-[#FF3811]"
        >
          Go back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
