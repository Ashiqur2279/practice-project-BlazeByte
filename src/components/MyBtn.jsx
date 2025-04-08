import React from 'react';
import {Link} from "react-router";

const MyBtn = ({btnStyle, to, btnName}) => {
    return (
        <Link to={to} className={btnStyle}>{btnName}</Link>
    );
};

export default MyBtn;
