import React from "react";
import { Button } from "/components/ui/button";
import Colors from "data/Colors";

const Hero = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <img
        src="/logo.png"
        width={65}
        height={65}
        alt="Logo"
        className="border rounded-2xl"
      />
      <div className="flex gap-5">
        <Button className="bg-white">Sign In</Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: Colors.BLUE,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
