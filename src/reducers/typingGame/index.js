import { Types } from '../../actions/typingGame'

export const initialState = {
  timer: 10,
  text: '',
  score: 0,
  hasStarted: false
}

export const typingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1
      }
    case Types.SAVE_TEXT:
      return {
        ...state,
        text: action.payload.text
      }
    case Types.SAVE_SCORE:
      return {
        ...state,
        score: action.payload.score
      }
    case Types.SET_STARTED:
      return {
        ...state,
        hasStarted: true
      }
    case Types.RESTART:
      return {
        ...initialState
      }
    default:
      return state
  }
}
