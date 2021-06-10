import * as type from '../types'

export interface User {
  id: number
  name?: string
  company?: string
}

interface InitialState {
  users: User[]
  loading: boolean
  error: string | null
}

const initialState: InitialState = { users: [], loading: false, error: null }

export default function Users(
  state = initialState,
  action: { type: string; payload: User; message: string }
) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return { ...state, loading: true }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: true,
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
