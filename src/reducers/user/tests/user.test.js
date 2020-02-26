import { initialState, userReducer } from '../../user'

describe('initialState', () => {
  test('should set the initial state ', () => {
    expect(initialState).toEqual({
      firstName: '',
      lastName: '',
      age: ''
    })
  })
})

describe('Reducers', () => {
  describe('SAVE_USER', () => {
    test('Should save user', () => {
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
