import React from "react";
import { useSelector } from "react-redux";
import SidebarNavLoggedOut from "./SidebarNavLoggedOut";
import SidebarNavLoggedIn from "./SidebarNavLoggedIn";
import AvatarStats from "../Avatar/AvatarStats/AvatarStats";
import MazeStats from "../Maze/MazeStats/MazeStats";
import "./Sidebar.scss";

const Sidebar = () => {
  const logged = useSelector(state => state.loginReducer.logged);

  return (
    <div className="h-100 px-2 pt-2 pb-2">
      <div className="sidebar-inner rounded-lg border border-light h-100">
        <h6>Game Navigation</h6>
        {logged ? <SidebarNavLoggedIn /> : <SidebarNavLoggedOut />}
        <div className="sidebar-stats rounded-lg border border-light">
          {logged ? <AvatarStats /> : <MazeStats />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
