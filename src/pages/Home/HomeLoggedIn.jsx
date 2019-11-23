import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AvatarStats from "../../components/Avatar/AvatarStats/AvatarStats";

const HomeLoggedIn = () => {
  return (
    <div>
      <h3>Player Stats</h3>
      <AvatarStats />
      <Button as={Link} to="/explore" className="mr-5 mt-3">
        Explore Maze!
      </Button>
    </div>
  );
};

export default HomeLoggedIn;
