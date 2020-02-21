export const Types = {
  DECREMENT_TIMER: '@typingGame/DECREMENT_TIMER',
  SAVE_TEXT: '@typingGame/SAVE_TEXT',
  SAVE_SCORE: '@typingGame/SAVE_SCORE',
  SET_STARTED: '@typingGame/SET_STARTED',
  RESTART: '@typingGame/RESTART'
}

export const Creators = {
  decrementTimer: () => ({
    type: Types.DECREMENT_TIMER
  }),
  saveText: text => ({
    type: Types.SAVE_TEXT,
    payload: {
      text
    }
  }),
  saveScore: score => ({
    type: Types.SAVE_SCORE,
    payload: {
      score
    }
  }),
  setStarted: () => ({
    type: Types.SET_STARTED
  }),
  restart: () => ({
    type: Types.RESTART
  })
}
