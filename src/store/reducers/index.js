import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import mazeStatsReducer from './mazeStatsReducer'
import avatarReducer from './avatarReducer'

export default combineReducers({
    loginReducer, mazeStatsReducer, avatarReducer
})
