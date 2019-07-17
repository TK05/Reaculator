import React from 'react'
import styled from 'styled-components/macro'
import { TiBackspaceOutline } from 'react-icons/ti'

import { useDataDispatch } from '../context/data-context'
import OptionsMenu from './OptionsMenu'
import {
  borderColor,
  buttonBgColor,
  buttonBgHoverColor,
  numberTextColor,
  operatorBgColor,
  operatorBgHoverColor,
  operatorTextColor
} from '../styles/themes'

export default function () {
  const dispatch = useDataDispatch()

  const buttons = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.', '='
  ]

  const operators = ['delete', '÷', '×', '−', '+']

  const handleClick = input => {
    let type = 'ADD_INPUT'
    if (input === 'delete') type = 'DELETE_LAST_INPUT'
    else if (input === '=') type = 'CALCULATE_EXPRESSION'

    dispatch({ type, input })
  }

  return (
    <ButtonContainer>
      <Numbers>
        {buttons.map(button => (
          <NumButton key={button} onClick={handleClick.bind(this, button)}>
            {button}
          </NumButton>
        ))}
      </Numbers>
      <Operators>
        {operators.map(operator => (
          <OpButton key={operator} onClick={handleClick.bind(this, operator)}>
            {operator === 'delete' ? <TiBackspaceOutline /> : operator}
          </OpButton>
        ))}
      </Operators>
      <OptionsMenu />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 23.75fr 5fr 42.5fr 23.75fr 5fr;
`

const Numbers = styled.div`
  border-radius: 0 0 0 5px;
  display: grid;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

const Operators = styled.div`
  background: ${operatorBgColor};
  border-left: 2px solid ${borderColor};
  display: grid;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  grid-template-rows: repeat(5, 1fr);
`

const NumButton = styled.div`
  align-items: center;
  background: ${buttonBgColor};
  color: ${numberTextColor};
  cursor: pointer;
  display: flex;
  font-size: 2.5rem;
  justify-content: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${buttonBgHoverColor};
    transition: background 0.3s ease-in-out;
  }
`

const OpButton = styled(NumButton)`
  background: ${operatorBgColor};
  color: ${operatorTextColor};
  font-size: 2rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${operatorBgHoverColor};
    transition: background 0.3s ease-in-out;
  }
`
