import { Types, Creators } from '../../form'

describe('Types', () => {
  it('should export the expected action types', () => {
    expect(Types).toEqual({
      SAVE_FORM: '@form/SAVE_FORM',
      SAVE_FIELD: '@form/SAVE_FIELD'
    })
  })
})

describe('Creators', () => {
  it('should return the saveForm action', () => {
    const data = [
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

    expect(Creators.saveForm(data)).toEqual({
      type: Types.SAVE_FORM,
      payload: { data }
    })
  })

  it('should return the saveField action', () => {
    const field = {
      id: 1,
      text: 'This is some text'
    }

    expect(Creators.saveField(field)).toEqual({
      type: Types.SAVE_FIELD,
      payload: { field }
    })
  })
})
