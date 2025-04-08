import React from 'react';
import MyBtn from "../components/MyBtn.jsx";

const Bookmarks = () => {
    return (
        <div>
            <MyBtn to={'/'} btnName={'back to home'} btnStyle={'btn btn-outline btn-primary'}/>
            this is bookmarks page
        </div>
    );
};

export default Bookmarks;