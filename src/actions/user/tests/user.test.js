import { Types, Creators } from '../../user'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      SAVE_USER: '@user/SAVE_USER'
    })
  })
})

describe('Creators', () => {
  it('should return the saveUser action', () => {
    expect(Creators.saveUser({ user: 'user' })).toEqual({
      type: Types.SAVE_USER,
      payload: { user: { user: 'user' } }
    })
  })
})
