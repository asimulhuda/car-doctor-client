import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";

const Hero = () => {
  return (
    <div className="lg:my-6">
      <Carousel className="rounded-xl">
        <div className="relative lg:h-[70vh] h-[100vh] w-full">
          <img
            src={img1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Affordable Price For Car Servicing
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 leading-10"
              >
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </Typography>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="rounded-none bg-[#FF3811]">
                  Discover More
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="outlined"
                  className="rounded-none"
                >
                  Latest Project
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:h-[70vh] h-[100vh] w-full">
          <img
            src={img2}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Affordable Price For Car Servicing
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 leading-10"
              >
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </Typography>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="rounded-none bg-[#FF3811]">
                  Discover More
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="outlined"
                  className="rounded-none"
                >
                  Latest Project
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:h-[70vh] h-[100vh] w-full">
          <img
            src={img3}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Affordable Price For Car Servicing
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 leading-10"
              >
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </Typography>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="rounded-none bg-[#FF3811]">
                  Discover More
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="outlined"
                  className="rounded-none"
                >
                  Latest Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
