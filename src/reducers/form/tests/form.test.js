import { formReducer, initialState } from '../../form'

describe('initialState', () => {
  it('should set the initial state ', () => {
    expect(initialState).toEqual({
      data: []
    })
  })
})

describe('Reducers', () => {
  describe('SAVE_FORM', () => {
    it('should save the form data', () => {
      const action = {
        type: '@form/SAVE_FORM',
        payload: {
          data: [
            {
              id: 1,
              text: 'This is some text 1'
            },
            {
              id: 2,
              text: 'This is some text 2'
            },
            {
              id: 3,
              text: 'This is some text 3'
            }
          ]
        }
      }

      expect(formReducer(initialState, action)).toEqual({
        data: [...action.payload.data]
      })
    })
  })

  describe('SAVE_FIELD', () => {
    it('should save a field from the from', () => {
      const action = {
        type: '@form/SAVE_FIELD',
        payload: {
          field: {
            id: 2,
            text: 'This is a text 2'
          }
        }
      }

      expect(formReducer(initialState, action)).toEqual({
        data: [
          {
            id: 2,
            text: 'This is a text 2'
          }
        ]
      })
    })

    it('should update a field from the form', () => {
      const beforeState = {
        data: [
          {
            id: 1,
            text: 'This is some text 1'
          },
          {
            id: 2,
            text: 'This is some text 2'
          },
          {
            id: 3,
            text: 'This is some text 3'
          }
        ]
      }

      const action = {
        type: '@form/SAVE_FIELD',
        payload: {
          field: {
            id: 2,
            text: 'This is a different text'
          }
        }
      }

      expect(formReducer(beforeState, action)).toEqual({
        data: [
          {
            id: 1,
            text: 'This is some text 1'
          },
          {
            id: 3,
            text: 'This is some text 3'
          },
          {
            id: 2,
            text: 'This is a different text'
          }
        ]
      })
    })
  })
})
