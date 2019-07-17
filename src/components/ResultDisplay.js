import React from 'react'
import styled from 'styled-components/macro'
import { up } from 'styled-breakpoints'

import { useDataState } from '../context/data-context'
import { resultTextColor } from '../styles/themes'

export default function () {
  const { result } = useDataState()

  const formatResult = number => {

    //  Blank display when no result
    if (number === '' || number === Infinity || number === -Infinity) return ''

    //  Catch when number is already in exponential form
    if (number.toString().match(/e/)) {
      return number.toPrecision(11).replace('e+', 'E').replace('e-', 'E−')
    }

    //  Format numbers too large to display
    if (number.toString().length > 13) {
      return number.toExponential(10).replace('e-', 'E−').replace('e+', 'E')
    }

    return number.toLocaleString(undefined, { maximumFractionDigits: 6 })
  }

  return (
    <DisplayResult>
      {formatResult(result)}
    </DisplayResult>
  )
}

const DisplayResult = styled.div`
  color: ${resultTextColor};
  font-size: 2.5rem;
  text-align: right;

  ${up('tablet')} {
    font-size: 3rem;
  }
`
