import React from 'react'
import { shallow } from 'enzyme'
import { Form } from '../../form'
import Input from '../../input'

describe('Form component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form saveForm={() => {}} saveField={() => {}} />)
  })

  it('should render a styled div component at the root', () => {
    const rootElementName = wrapper.name()

    expect(rootElementName).toMatch('styled.div')
  })

  it('should render three Input components with the correct title prop', () => {
    const inputs = wrapper.find(Input)

    expect(inputs).toHaveLength(3)

    for (let i = 0; i < 3; i++) {
      expect(inputs.at(i).props().title).toBe(`Text${i + 1}`)
    }
  })

  it('should render a button', () => {
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
  })
})
