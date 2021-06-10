import { combineReducers } from 'redux'
import Users from './users'
const rootReducer = combineReducers({
  users: Users,
})

export default rootReducer
//ApplicationState
export type RootState = ReturnType<typeof rootReducer>
