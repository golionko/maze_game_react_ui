import React from "react";
import { useSelector } from "react-redux";

const MazeStats = () => {
  const mazeStats = useSelector(state => state.mazeStatsReducer.stats);

  return (
    <div className="ml-2 mt-2">
      <p className="h6 small">Number of Rooms: {mazeStats.rooms}</p>
      <p className="h6 small">Number of Players: {mazeStats.players}</p>
      <p className="h6 small">Number of Monsters: {mazeStats.monsters}</p>
      <p className="h6 small">Number of Items: {mazeStats.items}</p>
    </div>
  );
};

export default MazeStats;
