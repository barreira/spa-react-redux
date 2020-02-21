import React from 'react'
import { connect } from 'react-redux'
import { bool, number } from 'prop-types'
import { Wrapper } from '../styles'

const TypingGameResult = ({ score, hasStarted }) => (
  <>
    {hasStarted && (
      <Wrapper>
        <h5>{`Score: ${score}`}</h5>
      </Wrapper>
    )}
  </>
)

const mapStateToProps = state => {
  return {
    score: state.typingGame.score,
    hasStarted: state.typingGame.hasStarted
  }
}

TypingGameResult.propTypes = {
  score: number,
  hasStarted: bool
}

export default connect(mapStateToProps, null)(TypingGameResult)
