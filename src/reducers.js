import { reducer as form } from 'redux-form'
import { reducer as sematable } from 'sematable'
import header from './containers/Header/reducer'
import sponsor from './containers/Sponsor/reducer'

export default {
  form,
  sematable,
  header,
  sponsor,
}
