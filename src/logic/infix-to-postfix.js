//  Takes in expression as infix array, returns expression in postfix array
const getPostfix = (expression) => {
  let stack = []
  let stackValue = 0
  let postfix = []

  const operationOrder = (operator) => {
    switch (operator) {
      case "*":
      case "/":
        return 2
      case "+":
      case "-":
        return 1
      default:
        return 0
    }
  }

  const handleOperator = operator => {
    const value = operationOrder(operator)

    //  Push when operation has precedence over stack
    if (value > stackValue) {
      stack.push(operator)
      stackValue += value

      //  Pop when stack takes precedence, push to postfix
    } else if (value < stackValue) {
      const poppedOp = stack.pop()
      const poppedValue = operationOrder(poppedOp)
      postfix.push(poppedOp)
      stackValue -= poppedValue
      handleOperator(operator)

      //  Swap when values are equal
    } else if (value === stackValue) {
      postfix.push(stack.pop())
      stack.push(operator)
    } else {
      throw new Error('infix-to-position--handleOp: Invalid operator.', operator)
    }
  }

  expression.forEach(item => {
    if (!isNaN(parseInt(item))) postfix.push(item)
    else if (item.match(/[+\-*/]/)) handleOperator(item)
    else throw new Error('infix-to-position--loop: Received item was invalid.', item)
  })

  //  Push remaining operators to end of expression
  while (stack.length > 0) postfix.push(stack.pop())

  return postfix
}

export { getPostfix }
