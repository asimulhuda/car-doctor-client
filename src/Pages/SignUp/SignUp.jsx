import { Card, Input, Button, Typography } from "@material-tailwind/react";
import NavBar from "../../Shared/NavBar";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handelSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:max-w-[1140px] lg:mx-auto mx-5 my-10 justify-between flex lg:flex-row flex-col-reverse items-center gap-16">
        <img src={loginImg} alt="" />
        <Card color="transparent" shadow={false} className="lg:p-16 p-5 border">
          <h2 className="text-[40px] text-center font-semibold text-[#444444]">
            Sign Up
          </h2>
          <form
            onSubmit={handelSignUp}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                name="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="Your email"
                name="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                name="password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button type="submit" className="mt-6 bg-[#FF3811]" fullWidth>
              Sign Up
            </Button>
          </form>
          <div className="space-y-4">
            <Typography color="gray" className="mt-4 text-center font-normal">
              Or Sign Up with
            </Typography>
            <div className="flex justify-center gap-4">
              <button className="p-3 bg-[#F5F5F8] rounded-full">
                <FaGoogle />
              </button>
              <button className="p-3 bg-[#F5F5F8] rounded-full">
                <FaFacebookF />
              </button>
              <button className="p-3 bg-[#F5F5F8] rounded-full">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#FF3811]">
              Login
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
