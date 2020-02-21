import { Types } from '../../actions/user'

export const initialState = {
  firstName: '',
  lastName: '',
  age: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_USER:
      return {
        ...state,
        ...action.payload.user
      }
    default:
      return state
  }
}
