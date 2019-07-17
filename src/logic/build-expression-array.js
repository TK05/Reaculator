//  Builds an infix array of the expression.
//    Also returns a count of numbers in the expression.
const buildExpression = input => {
  let splitIndex = 0;
  let expressionArray = []
  let numberCount = 0

  //  Format number with proper commas separators and decimals, then add to expressionArray.
  const formatAndAddNumber = (index, extra = 0) => {

    //  Number function can't handle comma separators
    let rawNumber = input.slice(splitIndex, index + extra).replace(/,/g, '')

    //  Add comma separators where appropriate
    if (rawNumber !== "" && !rawNumber.match(/\./)) {
      rawNumber = Number(rawNumber).toLocaleString()
      expressionArray.push(rawNumber)

      //  Handle numbers w/ decimals
    } else if (rawNumber.match(/\./)) {
      const splitNum = rawNumber.split('.')
      const leftNum = Number(splitNum[0]).toLocaleString()
      expressionArray.push(`${leftNum}.${splitNum[1]}`)
    }

    numberCount++
  }

  [...input].forEach((item, index) => {
    let isOperator = item.match(/[+*/-]/) && true

    // Split on operator, add previous number and then operator to expressionArray.
    if (isOperator) {
      formatAndAddNumber(index)
      expressionArray.push(input[index])
      splitIndex = index + 1

      //  Add last number to array as it won't be pushed by proceeding operator
    } else if (index === input.length - 1 && !isOperator) formatAndAddNumber(index, 1)
  })

  //  Handle case when expression starts w/ negative number
  if (expressionArray[0] === '-' && expressionArray.length > 1) {
    const number = `-${expressionArray[1]}`
    expressionArray = [number, ...expressionArray.splice(2)]
    numberCount--
  }

  // Check for minus signs that should actually represent a negative number
  let expression = []
  let shouldBeNegative = false

  expressionArray.forEach((item, index) => {
    if (item === '-') {
      const prevItem = expressionArray.slice(index - 1, index).toString()
      prevItem.match(/[+*/]/) ? shouldBeNegative = true : expression.push(item)

    } else if (shouldBeNegative) {
      expression.push(`-${item}`)
      shouldBeNegative = false

    } else {
      expression.push(item)
      shouldBeNegative = false
    }
  })

  //  Handle case when expression ends with minus sign
  if (shouldBeNegative) expression.push('-')
  
  return [expression, numberCount]
}

export { buildExpression }
