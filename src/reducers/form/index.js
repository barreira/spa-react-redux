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
        obj => obj.id !== action.payload.field.id
      )

      return {
        data: [
          ...filteredData,
          {
            id: action.payload.field.id,
            text: action.payload.field.text
          }
        ]
      }
    }
    default:
      return state
  }
}
