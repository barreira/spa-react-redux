import { Types } from '../../actions/form'

export const initialState = {
  data: []
}

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAVE_FORM: {
      return {
        data: [...action.payload.data]
      }
    }
    case Types.SAVE_FIELD: {
      const filteredData = state.data.filter(
        obj => obj.id !== action.payload.data.id
      )

      return {
        data: [
          ...filteredData,
          {
            id: action.payload.data.id,
            text: action.payload.data.text
          }
        ]
      }
    }
    default:
      return state
  }
}
