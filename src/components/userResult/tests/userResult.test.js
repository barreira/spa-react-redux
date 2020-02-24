import React from 'react'
import { shallow } from 'enzyme'
import { initialState } from '../../../reducers/user'
import { UserResult } from '../../userResult'

describe('UserResult component', () => {
  let wrapper, userProp, h5s

  beforeEach(() => {
    wrapper = shallow(<UserResult user={initialState} />)
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  beforeEach(() => {
    userProp = {
      firstName: 'João',
      lastName: 'Barreira',
      age: '23'
    }

    wrapper = shallow(<UserResult user={userProp} />)
    h5s = wrapper.find('h5')
  })

  it("should render both h5's", () => {
    expect(h5s).toHaveLength(2)
  })

  it('should render the first h5 with the correct text', () => {
    const text = `Name: ${userProp.firstName} ${userProp.lastName}`

    expect(h5s.at(0).text()).toMatch(text)
  })

  it('should render the second h5 with the correct text', () => {
    const text = `Age: ${userProp.age}`

    expect(h5s.at(1).text()).toMatch(text)
  })
})
