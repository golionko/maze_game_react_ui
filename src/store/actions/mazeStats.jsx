import { MazeStatsActionTypes } from "../consts/ActionTypes";

export const mazeStatsLoading = () => ({
  type: MazeStatsActionTypes.MAZE_STATS_LAODING
});

export const mazeStatsSuccess = stats => ({
  type: MazeStatsActionTypes.MAZE_STATS_SUCCESS,
  stats: stats
});

export const mazeStatsFailure = () => ({
  type: MazeStatsActionTypes.MAZE_STATS_FAILURE
});

export const getMazeStats = () => dispatch => {
  dispatch(
    mazeStatsSuccess({
      rooms: 2,
      players: 6,
      monsters: 4,
      items: 5
    })
  );
};
