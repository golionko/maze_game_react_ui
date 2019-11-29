import { MazeStatsActionTypes } from "../consts/ActionTypes";

const defaultState = {
  isLoading: false,
  errMsg: "",
  stats: {
    rooms: 0,
    players: 0,
    monsters: 0,
    items: 0
  }
};

const mazeStatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MazeStatsActionTypes.MAZE_STATS_LAODING: {
      return {
        ...state,
        isLoading: true,
        errMsg: "",
        stats: {}
      };
    }
    case MazeStatsActionTypes.MAZE_STATS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        stats: action.stats
      };
    }
    case MazeStatsActionTypes.MAZE_STATS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        errMsg: action.errMsg,
        stats: defaultState.stats
      };
    }

    default:
      return state;
  }
};

export default mazeStatsReducer;
