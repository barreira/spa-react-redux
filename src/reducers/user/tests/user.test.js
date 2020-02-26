import { initialState, userReducer } from '../../user'

describe('initialState', () => {
  it('should set the initial state', () => {
    expect(initialState).toEqual({
      firstName: '',
      lastName: '',
      age: ''
    })
  })
})

describe('Reducers', () => {
  describe('SAVE_USER', () => {
    it('should save user', () => {
      const action = {
        type: 'SAVE_USER',
        payload: {
          user: {
            firstName: 'some_name'
          }
        }
      }

      expect(userReducer(initialState, action)).toEqual({
        ...initialState,
        ...action.user
      })
    })
  })
})
