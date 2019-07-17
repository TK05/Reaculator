import { validateInput } from '../logic/validate-input'
import { buildExpression } from '../logic/build-expression-array'
import { getPostfix } from '../logic/infix-to-postfix'
import { calculate } from '../logic/calculate'
import { changeOperators } from '../logic/change-operators'

const DEBUG = false

const updateDataState = (input, state) => {

  //  Validate entire input, returns string w/ operators in visual display form
  const validInput = validateInput(input)

  if (DEBUG) console.log('action.input:', input)
  if (DEBUG) console.log('state.input:', state.input)
  if (DEBUG) console.log('validInput:', validInput)

  if (validInput && validInput !== state.input) {

    //  Change operators to JS operators while still a string
    const jsOpInput = changeOperators(validInput)

    //  Infix expression array w/ comma separators
    const [expression, numberCount] = buildExpression(jsOpInput)

    //  Format expression for display and change operators to visual form
    const displayString = changeOperators(expression.join(''), true)

    if (DEBUG) console.log('jsOpInput:', jsOpInput)
    if (DEBUG) console.log('expression:', expression)
    if (DEBUG) console.log('displayString:', displayString)

    //  Only continue if more than one number in expression
    if (numberCount <= 1) return [true, displayString, ""]

    //  Remove any trailing operators to allow for correct calcultion
    while (true) {
      let lastItem = expression.slice(-1)
      lastItem = lastItem[0].replace(/[,]/g, '')

      if (isNaN(Number(lastItem))) expression.splice(-1, 1)
      else break
    }

    //  Convert array from infix to postfix and calculate
    const asPostfix = getPostfix(expression)
    const result = calculate(asPostfix)

    if (DEBUG) console.log('expression-post-strip:', expression)
    if (DEBUG) console.log('asPostfix:', asPostfix)
    if (DEBUG) console.log('result:', result)

    return [true, displayString, result]
  }
  //  Handle case for deleting all inputs
  else if (validInput !== null) return [true, validInput, state.result]
  else return [false, "", ""]
}

function dataReducer(state, action) {
  switch (action.type) {

    case 'ADD_INPUT': {
      const [wasValid, input, result] = updateDataState(state.input + action.input, state)

      if (wasValid) return { input, result }
      else return state
    }

    case 'DELETE_LAST_INPUT': {
      const [wasValid, input, result] = updateDataState(state.input.slice(0, -1), state)

      if (wasValid) return { input, result }
      else return state
    }

    case 'CALCULATE_EXPRESSION': {
      if (state.result === "") return state
      if (state.result === Infinity || state.result === -Infinity) {
        return { input: '', result: '' }
      }

      return { input: state.result.toLocaleString(), result: '' }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default dataReducer
