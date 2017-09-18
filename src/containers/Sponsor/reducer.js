import {
  TOGGLE_ADD_SPONSOR,
  TOGGLE_EDIT_DETAILS,
  TOGGLE_DELETE_SPONSOR,
  TOGGLE_EDIT_QUESTIONS,
} from './types'

const INITIAL_STATE = {
  showModal: false,
  isEditing: false,
  isDeleting: false,
  isEditingQuestions: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADD_SPONSOR:
      return { ...state, showModal: action.payload }
    case TOGGLE_EDIT_DETAILS:
      return { ...state, isEditing: action.payload }
    case TOGGLE_DELETE_SPONSOR:
      return { ...state, isDeleting: action.payload }
    case TOGGLE_EDIT_QUESTIONS:
      return { ...state, isEditingQuestions: action.payload }
    default:
      return state
  }
}
