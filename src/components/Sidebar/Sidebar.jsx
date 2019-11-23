import React from "react";
import { useSelector } from "react-redux";
import SidebarNavLoggedOut from "./SidebarNavLoggedOut";
import SidebarNavLoggedIn from "./SidebarNavLoggedIn";
import AvatarStats from '../Avatar/AvatarStats/AvatarStats';
import MazeStats from '../Maze/MazeStats/MazeStats'

const Sidebar = () => {
  const logged = useSelector(state => state.loginReducer.logged);

  return (
    <div className="sidebar bg-dark text-white h-100 mt-2 px-2 py-2 rounded-lg">
      <div
        className="rounded-lg border border-light h-100"
        style={{ paddingLeft: "10px", paddingTop: "10px" }}
      >
        <h6>Game Navigation</h6>
        {logged ? <SidebarNavLoggedIn /> : <SidebarNavLoggedOut />}
        <div
          className="rounded-lg border border-light"
          style={{
            position: "absolute",
            bottom: "10px",
            width: "232px",
            height: "305px"
          }}
        >
          {logged ? <AvatarStats /> : <MazeStats />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
