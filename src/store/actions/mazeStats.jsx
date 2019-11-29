import { MazeStatsActionTypes } from "../consts/ActionTypes";
import { remote } from "../../util/remote";

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
  dispatch(mazeStatsLoading());

  remote().get('/maze/stats')
  .then(function (response) {
    dispatch(mazeStatsSuccess(response.data));
  })
  .catch(function (error) {
    dispatch(mazeStatsFailure());
  });
};
