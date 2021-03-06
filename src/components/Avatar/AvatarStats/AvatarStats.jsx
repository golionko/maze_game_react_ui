import React from "react";
import { useSelector } from "react-redux";

const AvatarStats = () => {
  const avatar = useSelector(state => state.avatarReducer.avatar);

  const hpPercent = () => `${(avatar.hp / avatar.maxHp) * 100}%`;
  const energyPercent = () => `${(avatar.energy / avatar.maxEnergy) * 100}%`;
  const xpPercent = () => `${(avatar.xp / avatar.maxXp) * 100}%`;

  return (
    <div className="ml-2 mt-2">
      <p className="h6 small">
        <strong>{avatar.name}</strong>
      </p>
      <p className="h6 small">{`Level: ${avatar.level}`}</p>
      <p className="h6 small">{`Strength: ${avatar.strength}`}</p>
      <p className="h6 small">{`Dexterity: ${avatar.dexterity}`}</p>
      <p className="h6 small">{`Luck: ${avatar.luck}`}</p>
      <p className="h6 small">{`Constitution: ${avatar.constitution}`}</p>
      <p className="h6 small mt-4">Experience</p>
      <div className="progress" style={{ width: "96%" }}>
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: xpPercent() }}
          aria-valuenow={avatar.xp}
          aria-valuemin="0"
          aria-valuemax={avatar.maxXp}
        ></div>
      </div>
      <p className="h6 small mt-2">Energy</p>
      <div className="progress" style={{ width: "96%" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: energyPercent() }}
          aria-valuenow={avatar.energy}
          aria-valuemin="0"
          aria-valuemax={avatar.maxEnergy}
        ></div>
      </div>
      <p className="h6 small mt-2">Health Points</p>
      <div className="progress" style={{ width: "96%" }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hpPercent() }}
          aria-valuenow={avatar.hp}
          aria-valuemin="0"
          aria-valuemax={avatar.maxHp}
        ></div>
      </div>
    </div>
  );
};

export default AvatarStats;
