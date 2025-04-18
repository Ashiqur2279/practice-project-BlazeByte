import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router";

const Nav = () => {
    const [theme, setTheme] = useState("light");
    const handleThemeToggle = (event) => {
        if (event.target.checked) {
            setTheme("synthwave");
        } else setTheme("light");
    };
    useEffect(() => {
        localStorage.setItem('localTheme', theme)
        const currentLocalTheme = localStorage.getItem('localTheme')
        document.querySelector("html").setAttribute("data-theme", currentLocalTheme);
    }, [theme])
    return (
        <div>
            <div className="navbar bg-base-100 top-0 sticky shadow-xl z-10">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-2xl font-bold normal-case gap-0">
                        <span className="text-secondary">Byte</span>
                        <span className="text-primary">Blaze</span>
                    </Link>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal  hidden sm:flex items-center gap-4">
                        <NavLink to='/' className={({isActive}) =>
                            isActive ? "text-primary font-bold" : "font-bold"
                        }>
                            Home
                        </NavLink>
                        <NavLink to='blogs'
                                 className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>
                            <p>Blog</p>
                        </NavLink>
                        <NavLink to='bookmarks'
                                 className={({isActive}) => isActive ? 'text-primary font-bold' : 'font-bold'}>
                            <p>Bookmarks</p>
                        </NavLink>
                        <li>
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="5"/>
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                                </svg>
                                <input
                                    onChange={handleThemeToggle}
                                    type="checkbox"
                                    value="synthwave"
                                    className="toggle theme-controller"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
