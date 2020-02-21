export const Types = {
  SAVE_USER: '@user/SAVE_USER'
}

export const Creators = {
  saveUser: user => ({
    type: Types.SAVE_USER,
    payload: { user }
  })
}
