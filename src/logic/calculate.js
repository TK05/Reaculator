//  Takes in expression as postfix array, returns number
const calculate = expression => {

  const evaluate = (a, b, op) => {
    const operations = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return a - b },
      '*': function (a, b) { return a * b },
      '/': function (a, b) { return a / b },
    }

    const result = operations[op](a, b)
    return result
  }

  let index = 0

  //  Goal is to reduce array to length 1; index > 1 will be an error
  while (expression.length > 1 && index < 2) {
    let a = expression[index]
    let b = expression[index + 1]
    const op = expression[index + 2]

    //  Do not continue if op is a number
    if (isNaN(parseInt(op))) {

      //  Strip any commas if type string, convert to number
      if (typeof a === "string") a = Number(a.replace(/[,]/g, ''))
      if (typeof b === "string") b = Number(b.replace(/[,]/g, ''))

      const result = evaluate(a, b, op)

      //  If result, replace a, b, op with result
      if (result) {
        expression.splice(index, 3, result)
        index = 0
      } else if (result === 0) {
        expression.splice(index, 3, Math.abs(result))
        index = 0
      }

      //  Set expression to blank array when result is NaN
      else expression = []
    }
    //  Move capture group right by one if no result (no valid op)
    else index++
  }

  if (expression.length === 1) return expression[0]
  else return ''
}

export { calculate }
