import React from "react";

const WelcomeText = () => {
  return (
    <div className=" text-center p-4">
      <h1 className="text-3xl font-bold">
        Welcome to <span className="text-primary">ByteBlaze</span>
      </h1>
      <p>
        ByteBlaze is the bridge between the complex world of technology and the
        curious minds eager to understand it
      </p>
      <div className="space-x-2">
        <button className="btn btn-primary">Blogs</button>
        <button className="btn btn-secondary">Bookmarks</button>
      </div>
    </div>
  );
};

export default WelcomeText;
