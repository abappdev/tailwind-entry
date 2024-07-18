import React from "react";

const Body = () => {
  return (
    <div>
      <div className="flex item-center justify-center">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="1st"
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="1st"
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="1st"
          className="absolute h-64"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host yout website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem
          nobis est doloremque quaerat quia repellat ducimus maiores, sequi odit
          hic facilis id ab mollitia tempora excepturi praesentium itaque rem!
        </p>
        <br/>
        <form action="" className="flex flex-col gap-2">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 hover:text-white">
            Join Waitlist
          </button>
        </form>
        <div>
          <img src="./assets/Checkmark.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
