import { TOGGLE_ACTIVE } from './types'

export const toggleActive = eventKey => ({
  type: TOGGLE_ACTIVE,
  payload: eventKey,
})
