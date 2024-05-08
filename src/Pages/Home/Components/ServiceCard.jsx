import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="p-6 rounded-[10px] border space-y-4 ">
      <img src={img} alt="" className="h-[210px]" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-between items-center text-[#FF3811]">
        <p className="text-xl font-semibold">Price : $ {price}</p>
        <Link to={`/checkout/${_id}`} className="text-xl">
          <HiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
