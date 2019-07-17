import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { up } from 'styled-breakpoints'

import { useDataDispatch, useDataState } from '../context/data-context'
import { caretColor, displayBgColor, displayTextColor } from '../styles/themes'

export default function () {
  const { input } = useDataState()
  const dispatch = useDataDispatch()

  //  addEventListener to listen for keypresses, handles inputs, also controls backspace
  useEffect(() => {
    document.addEventListener("keydown", e => {
      e.preventDefault()
      if (e.keyCode) {
        const displayEl = document.getElementById('display')
        displayEl.focus()

        let input = e.key

        //  Inputs are handled VISUAL FIRST so swap keyboard operators for visual ones
        if (input === '-') input = '−'
        else if (input === '*') input = '×'
        else if (input === '/') input = '÷'

        let type = 'ADD_INPUT'
        if (input === '=') type = 'CALCULATE_EXPRESSION'
        else if (input === 'Backspace') type = 'DELETE_LAST_INPUT'

        dispatch({ type, input })
        console.log(e)
      }
    })
  }, [dispatch])

  //  Somewhat crudely scale display font-size on input.length
  const updateFontSize = () => {
    if (input.length <= 9) return ''
    else if (input.length >= 10 && input.length <= 12) return 'small'
    else if (input.length >= 13 && input.length <= 16) return 'smaller'
    else return 'smallest'
  }

  return (
    <DisplayContainer>
      <DisplayOuter>
        <Display id="display" className={updateFontSize()}>
          {input}
        </Display>
      </DisplayOuter>
      <Caret />
    </DisplayContainer>
  )
}

const DisplayContainer = styled.div`
  align-items: center;
  background: ${displayBgColor};
  display: grid;
  grid-template-columns: auto 3px;
  justify-content: end;
`

const Caret = styled.div`
  animation: blinker 1s step-start infinite;
  background: ${caretColor};
  grid-column: 2 / 3;
  width: 2px;
  height: 5rem;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  ${up('tablet')} {
    height: 6rem;
  }
`

const DisplayOuter = styled.div`
  grid-column: 1 / 2;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
  width: 100%
`

const Display = styled.div`
  color: ${displayTextColor};
  font-size: 4rem;
  transition: font-size 0.3s;

  float: right;

  &.small {
    font-size: 3rem;
    transition: font-size 0.3s;
  }

  &.smaller {
    font-size: 2.5rem;
    transition: font-size 0.3s;
  }

  &.smallest {
    font-size: 2rem;
    transition: font-size 0.3s;
  }

  ${up('tablet')} {
    font-size: 5rem;

    &.small {
      font-size: 4rem;
      transition: font-size 0.3s;
    }

    &.smaller {
      font-size: 3rem;
      transition: font-size 0.3s;
    }

    &.smallest {
      font-size: 2.5rem;
      transition: font-size 0.3s;
    }
  }
`
