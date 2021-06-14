import * as type from '../types'

export interface User {
  id: string
  name: string
  number: number
  isEmployed: boolean
  profileImage: string
}

interface InitialState {
  users: User[]
  loading: boolean
  error: string | null
}

const initialState: InitialState = { users: [], loading: false, error: null }

export default function Users(
  state = initialState,
  action: { type: string; users: User[]; message: string }
) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return { ...state, loading: true }
    case type.GET_USERS_SUCCESS:
      // state.users.push(action.users)
      return {
        ...state,
        users: action.users,
        loading: false,
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}
