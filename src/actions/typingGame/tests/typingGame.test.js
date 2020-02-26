import { Types, Creators } from '../../typingGame'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      DECREMENT_TIMER: '@typingGame/DECREMENT_TIMER',
      SAVE_TEXT: '@typingGame/SAVE_TEXT',
      SAVE_SCORE: '@typingGame/SAVE_SCORE',
      SET_STARTED: '@typingGame/SET_STARTED',
      RESTART: '@typingGame/RESTART'
    })
  })
})

describe('Creators', () => {
  it('should return the decrementTimer action', () => {
    expect(Creators.decrementTimer()).toEqual({
      type: Types.DECREMENT_TIMER
    })
  })

  it('should return the saveText action', () => {
    const text = 'This is some text'

    expect(Creators.saveText(text)).toEqual({
      type: Types.SAVE_TEXT,
      payload: { text }
    })
  })

  it('should return the saveScore action', () => {
    const score = 25

    expect(Creators.saveScore(score)).toEqual({
      type: Types.SAVE_SCORE,
      payload: { score }
    })
  })

  it('should return the setStarted action', () => {
    expect(Creators.setStarted()).toEqual({
      type: Types.SET_STARTED
    })
  })

  it('should return the restart action', () => {
    expect(Creators.restart()).toEqual({
      type: Types.RESTART
    })
  })
})
