import React from 'react'
import { shallow } from 'enzyme'
import { User } from '../../user'

describe('User component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<User saveUser={() => {}} />)
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  it('renders all the Input elements', () => {
    const inputs = wrapper.find('Input')

    expect(inputs).toHaveLength(3)
  })
})
