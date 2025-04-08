import React from 'react';
import MyBtn from "../components/MyBtn.jsx";

const Blogs = () => {
    return (
        <div>
            <MyBtn to={'/'} btnName={'back to home'} btnStyle={'btn btn-outline btn-primary'}/>
            <div>
                this is blog page
            </div>
        </div>
    );
};

export default Blogs;