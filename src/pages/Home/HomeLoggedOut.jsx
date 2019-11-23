import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomeLoggedOut = () => {
  return (
    <div>
      <h3>Welcome to the Maze!</h3>
      <p className="mt-3">
        Maze is an online text-based role-playing game set in the near future.
        The world both magic as well as modernized weapons, with monsters,
        traps, and an over-zealous government that trapped you inside. Large
        corporations control most of the world , politicians are not so much
        voted for as they are owned, and interest-groups lobby to enact laws to
        their benefit. This caused the creation of the Maze in which you find
        yourself.{" "}
      </p>
      <p>
        A monstrous creation in the shape of a cube. The cube is broken up to
        many rooms which constantly move. Your task is to find a way out while
        escaping or fighting the different monsters and traps thrown at you.
      </p>
      <p>
        Registration is completely free, but donations are certainly welcome!
      </p>
      <Button as={Link} to="/signup" className="mr-5">
        REGISTER TODAY FOR FREE!
      </Button>
      <p className="mt-3">
        The Maze is in constant development, with constant additions to the
        game. But besides our future additions, our goal is to create a fun game
        that just plain works. This means putting an emphasis on fixing game
        bugs, unbalanced game mechanics, and other nonsense that makes the game
        not function as intended. To help stomp out these bugs, we need the help
        of our community. If you do happen to find a bug, or something that just
        doesn’t work as you thought it should, let us know in our{" "}
        <Link to="/contact">contact form</Link>.
      </p>
    </div>
  );
};

export default HomeLoggedOut;
