import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import AvatarStats from "../../components/Avatar/AvatarStats/AvatarStats";

const HomeLoggedIn = () => {
  const avatar = useSelector(state => state.avatarReducer.avatar);

  const hpPercent = () => `${(avatar.hp / avatar.maxHp) * 100}%`;
  const energyPercent = () => `${(avatar.energy / avatar.maxEnergy) * 100}%`;
  const xpPercent = () => `${(avatar.xp / avatar.maxXp) * 100}%`;

  return (
    <div className="pl-3 pt-4 pb-1 pr-5 mt-2 bg-dark text-white h6 rounded-lg h-100 w-75">
      <h3>Player Stats</h3>
      <AvatarStats />
      <Button as={Link} to="/explore" className="mr-5 mt-3">
        Explore Maze!
      </Button>
    </div>
  );
};

export default HomeLoggedIn;
