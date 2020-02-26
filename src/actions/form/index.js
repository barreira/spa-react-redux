export const Types = {
  SAVE_FORM: '@form/SAVE_FORM',
  SAVE_FIELD: '@form/SAVE_FIELD'
}

export const Creators = {
  saveForm: data => ({
    type: Types.SAVE_FORM,
    payload: { data }
  }),
  saveField: field => ({
    type: Types.SAVE_FIELD,
    payload: { field }
  })
}
