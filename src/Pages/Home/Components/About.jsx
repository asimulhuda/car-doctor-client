import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";
import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-10 items-center">
        <div className="relative space-y-4  ">
          <img src={img1} alt="" className="rounded-xl lg:h-[473px]" />
          <img
            src={img2}
            alt=""
            className="rounded-xl lg:w-[327px] h-[332px] lg:absolute top-2/4 left-2/4 border-white border-[12px]"
          />
        </div>
        <div className="space-y-5">
          <h4 className="text-[#FF3811] text-xl font-bold">About Us</h4>
          <h3 className="text-[45px] leading-tight font-bold">
            We are qualified & of experience in this field
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <Button size="lg" className="rounded-lg bg-[#FF3811]">
            Get More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
