import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex items-center">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold gap-0">
            <span className="text-secondary">Byte</span>
            <span className="text-primary">Blaze</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <a>Home</a>
            </li>
            <li className="font-bold">
              <a>Blog</a>
            </li>
            <li className="font-bold">
              <a>Bookmarks</a>
            </li>
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
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
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
