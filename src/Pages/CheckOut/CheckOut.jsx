import { Button, Input } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service Booked Successfully");
        }
      });
  };

  return (
    <div className="my-10">
      <h2 className="text-center my-4 text-3xl">Book Service : {title}</h2>
      <div className="lg:p-24 p-8 bg-[#F3F3F3] rounded-lg">
        <form onSubmit={handleBooking}>
          <div className="grid gap-4 mb-4 lg:grid-cols-2">
            <div className="space-y-4">
              <label htmlFor="name">Name</label>
              <Input
                label="Your Name"
                defaultValue={user?.displayName}
                name="name"
                type="text"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="name">Date</label>
              <Input name="date" type="date" />
            </div>
            <div className="space-y-4">
              <label htmlFor="name">Email</label>

              <Input
                label="Your Email"
                defaultValue={user?.email}
                name="email"
                type="email"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="name">Due Amount</label>
              <Input
                label="Due Amount"
                name="amount"
                defaultValue={price}
                type="number"
              />
            </div>
          </div>
          <Button
            size="lg"
            type="submit"
            className="mt-6 bg-[#FF3811]"
            fullWidth
          >
            Order Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
