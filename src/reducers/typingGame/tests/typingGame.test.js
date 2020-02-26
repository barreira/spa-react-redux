import { initialState, typingGameReducer } from '../../typingGame'

describe('initialState', () => {
  it('should set the initial state', () => {
    expect(initialState).toEqual({
      timer: 10,
      text: '',
      score: 0,
      hasStarted: false
    })
  })
})

describe('Reducers', () => {
  describe('DECREMENT_TIMER', () => {
    it('should decrement the timer in the state by one', () => {
      const action = {
        type: '@typingGame/DECREMENT_TIMER'
      }

      expect(typingGameReducer(initialState, action)).toEqual({
        ...initialState,
        timer: 9
      })
    })
  })

  describe('SAVE_TEXT', () => {
    it('should save the text in the state', () => {
      const inputText = 'This is some text'

      const action = {
        type: '@typingGame/SAVE_TEXT',
        payload: {
          text: inputText
        }
      }

      expect(typingGameReducer(initialState, action)).toEqual({
        ...initialState,
        text: inputText
      })
    })
  })

  describe('SAVE_SCORE', () => {
    it('should save the score in the state', () => {
      const inputScore = 5

      const action = {
        type: '@typingGame/SAVE_SCORE',
        payload: {
          score: inputScore
        }
      }

      expect(typingGameReducer(initialState, action)).toEqual({
        ...initialState,
        score: inputScore
      })
    })
  })

  describe('SET_STARTED', () => {
    it('should set the hasStarted field to true', () => {
      const action = {
        type: '@typingGame/SET_STARTED'
      }

      expect(typingGameReducer(initialState, action)).toEqual({
        ...initialState,
        hasStarted: true
      })
    })
  })

  describe('RESTART', () => {
    it('should reset the state to the initialState', () => {
      const beforeState = {
        timer: 0,
        text: 'Lorem',
        score: 5,
        hasStarted: true
      }

      const action = {
        type: '@typingGame/RESTART'
      }

      expect(typingGameReducer(beforeState, action)).toEqual({
        ...initialState
      })
    })
  })
})
