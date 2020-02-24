import React from 'react'
import { shallow } from 'enzyme'
import { initialState } from '../../../reducers/typingGame'
import { TypingGame } from '../../typingGame'
import { SAMPLE_TEXT } from '../../../constants'

describe('FormResult component', () => {
  let wrapper, props

  beforeEach(() => {
    props = {
      timer: initialState.timer,
      text: initialState.text,
      score: initialState.score,
      hasStarted: initialState.hasStarted,
      userName: 'João Barreira',
      decrementTimer: () => {},
      saveText: () => {},
      saveScore: () => {},
      setStarted: () => {},
      restart: () => {}
    }

    wrapper = shallow(
      <TypingGame
        timer={props.timer}
        text={props.text}
        score={props.score}
        hasStarted={props.hasStarted}
        userName={props.userName}
        decrementTimer={props.decrementTimer}
        saveText={props.saveText}
        saveScore={props.saveScore}
        setStarted={props.setStarted}
        restart={props.restart}
      />
    )
  })

  it('should render a styled div component at the root', () => {
    expect(wrapper.name()).toMatch('styled.div')
  })

  it('should render an h5 containing the sample text', () => {
    const h5 = wrapper.find('h5')

    expect(h5.text()).toMatch(SAMPLE_TEXT)
  })

  it('should render a textarea containing the text in the store', () => {
    const textarea = wrapper.find('textarea')

    expect(textarea.text()).toMatch(props.text)
  })

  it('should render an h3 referencing the timer in the store', () => {
    const h3 = wrapper.find('h3')
    const text = `You have ${props.timer} seconds`

    expect(h3.text()).toMatch(text)
  })

  describe('when the timer finishes (i.e. reaches 0)', () => {
    let resultMessage, h4

    it('should render a button to reset the timer and restart the game', () => {
      props = {
        timer: 0,
        text: SAMPLE_TEXT,
        score: SAMPLE_TEXT.length,
        hasStarted: true,
        userName: 'João Barreira',
        decrementTimer: () => {},
        saveText: () => {},
        saveScore: () => {},
        setStarted: () => {},
        restart: () => {}
      }

      wrapper = shallow(
        <TypingGame
          timer={props.timer}
          text={props.text}
          score={props.score}
          hasStarted={props.hasStarted}
          userName={props.userName}
          decrementTimer={props.decrementTimer}
          saveText={props.saveText}
          saveScore={props.saveScore}
          setStarted={props.setStarted}
          restart={props.restart}
        />
      )

      resultMessage = 'Try again!'
      const button = wrapper.find('button')

      expect(button.text()).toMatch('Reset timer')
    })

    describe('when the user has the maximum score', () => {
      describe('when the user has registered their name', () => {
        it('should render an h4 containing the appropriate result message', () => {
          props = {
            timer: 0,
            text: SAMPLE_TEXT,
            score: SAMPLE_TEXT.length,
            hasStarted: true,
            userName: 'João Barreira',
            decrementTimer: () => {},
            saveText: () => {},
            saveScore: () => {},
            setStarted: () => {},
            restart: () => {}
          }

          wrapper = shallow(
            <TypingGame
              timer={props.timer}
              text={props.text}
              score={props.score}
              hasStarted={props.hasStarted}
              userName={props.userName}
              decrementTimer={props.decrementTimer}
              saveText={props.saveText}
              saveScore={props.saveScore}
              setStarted={props.setStarted}
              restart={props.restart}
            />
          )
          resultMessage = `Well done, ${props.userName}!`
          h4 = wrapper.find('h4')

          expect(h4.text()).toMatch(resultMessage)
        })
      })

      describe("when the user hasn't registered their name", () => {
        it('should render an h4 containing the appropriate result message', () => {
          props = {
            timer: 0,
            text: SAMPLE_TEXT,
            score: SAMPLE_TEXT.length,
            hasStarted: true,
            userName: '',
            decrementTimer: () => {},
            saveText: () => {},
            saveScore: () => {},
            setStarted: () => {},
            restart: () => {}
          }

          wrapper = shallow(
            <TypingGame
              timer={props.timer}
              text={props.text}
              score={props.score}
              hasStarted={props.hasStarted}
              userName={props.userName}
              decrementTimer={props.decrementTimer}
              saveText={props.saveText}
              saveScore={props.saveScore}
              setStarted={props.setStarted}
              restart={props.restart}
            />
          )

          resultMessage = 'Well done!'
          h4 = wrapper.find('h4')

          expect(h4.text()).toMatch(resultMessage)
        })
      })
    })

    describe("when the user doesn't have the maximum score", () => {
      describe('when the user has registered their name', () => {
        it('should render an h4 containing the appropriate result message', () => {
          props = {
            timer: 0,
            text: 'Lorem',
            score: 5,
            hasStarted: true,
            userName: 'João Barreira',
            decrementTimer: () => {},
            saveText: () => {},
            saveScore: () => {},
            setStarted: () => {},
            restart: () => {}
          }

          wrapper = shallow(
            <TypingGame
              timer={props.timer}
              text={props.text}
              score={props.score}
              hasStarted={props.hasStarted}
              userName={props.userName}
              decrementTimer={props.decrementTimer}
              saveText={props.saveText}
              saveScore={props.saveScore}
              setStarted={props.setStarted}
              restart={props.restart}
            />
          )

          resultMessage = `Try again, ${props.userName}!`
          h4 = wrapper.find('h4')

          expect(h4.text()).toMatch(resultMessage)
        })
      })

      describe("when the user hasn't registered their name", () => {
        it('should render an h4 containing the appropriate result message', () => {
          props = {
            timer: 0,
            text: 'Lorem',
            score: 5,
            hasStarted: true,
            userName: '',
            decrementTimer: () => {},
            saveText: () => {},
            saveScore: () => {},
            setStarted: () => {},
            restart: () => {}
          }

          wrapper = shallow(
            <TypingGame
              timer={props.timer}
              text={props.text}
              score={props.score}
              hasStarted={props.hasStarted}
              userName={props.userName}
              decrementTimer={props.decrementTimer}
              saveText={props.saveText}
              saveScore={props.saveScore}
              setStarted={props.setStarted}
              restart={props.restart}
            />
          )

          resultMessage = 'Try again!'
          h4 = wrapper.find('h4')

          expect(h4.text()).toMatch(resultMessage)
        })
      })
    })
  })
})
