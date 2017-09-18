import { TOGGLE_ACTIVE } from './types'

const INITIAL_STATE = { selectedKey: 1 }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return { ...state, selectedKey: action.payload }
    default:
      return state
  }
}
