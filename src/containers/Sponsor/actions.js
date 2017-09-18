import {
  TOGGLE_ADD_SPONSOR,
  TOGGLE_EDIT_DETAILS,
  TOGGLE_DELETE_SPONSOR,
  TOGGLE_EDIT_QUESTIONS,
} from './types'

export const toggleModal = showModal => ({
  type: TOGGLE_ADD_SPONSOR,
  payload: !showModal,
})

export const toggleDetailsEdit = isEditing => ({
  type: TOGGLE_EDIT_DETAILS,
  payload: !isEditing,
})

export const toggleDelete = isDeleting => ({
  type: TOGGLE_DELETE_SPONSOR,
  payload: !isDeleting,
})

export const toggleQuestionsEdit = isEditingQuestions => ({
  type: TOGGLE_EDIT_QUESTIONS,
  payload: !isEditingQuestions,
})
