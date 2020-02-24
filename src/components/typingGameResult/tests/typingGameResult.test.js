import React from 'react'
import { shallow } from 'enzyme'
import { TypingGameResult } from '../../typingGameResult'

describe('TypingGameResult component', () => {
  let wrapper, props

  beforeEach(() => {
    props = {
      score: 0,
      hasStarted: false
    }

    wrapper = shallow(
      <TypingGameResult score={props.score} hasStarted={props.hasStarted} />
    )
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  describe("when the game hasn't started", () => {
    it("shouldn't render anything else", () => {
      expect(wrapper.children()).toHaveLength(0)
    })
  })

  describe('when the game has started', () => {
    beforeEach(() => {
      props = {
        score: 0,
        hasStarted: true
      }

      wrapper = shallow(
        <TypingGameResult score={props.score} hasStarted={props.hasStarted} />
      )
    })

    it("should render an h5 containing the user's score", () => {
      const h5 = wrapper.find('h5')
      const text = `Score: ${props.score}`

      expect(h5.exists()).toBe(true)
      expect(h5.text()).toMatch(text)
    })
  })
})
