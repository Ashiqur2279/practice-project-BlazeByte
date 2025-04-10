import React from "react";
import MyBtn from "./MyBtn.jsx";

const WelcomeText = () => {
    return (
        <div className="h-full hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">
                        Welcome to <span className="text-primary">ByteBlaze</span>
                    </h1>
                    <p>
                        ByteBlaze is the bridge between the complex world of technology and the
                        curious minds eager to understand it
                    </p>
                    <div className="space-x-2">
                        <MyBtn to={'blogs'} btnName={'Blogs'} btnStyle={'btn btn-primary'}/>
                        <MyBtn to={'bookmarks'} btnName={'Bookmarks'} btnStyle={'btn btn-secondary'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeText;
