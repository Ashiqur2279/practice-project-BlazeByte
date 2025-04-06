import React from "react";
import Nav from "../components/Nav";
import WelcomeText from "../components/WelcomeText";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <WelcomeText />
      </div>
    </div>
  );
};

export default Home;
