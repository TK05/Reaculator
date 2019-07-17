//  Validates most recent input and, if necessary, relation to previous input
//    Takes in allInputs as string, outputs validated string
const validateInput = allInputs => {
  let input = allInputs.slice(-1)
  const previousInput = allInputs.length > 1 ? allInputs.slice(-2, -1) : false

  //  Check all inputs w/ allowed regex
  const regexMatch = allInputs.match(/^[.,+−×÷\d]{1,}$/)
  if (!input || regexMatch) {

    //  When first input is an operator, only allow '−'
    const isOp = input.match(/[+×÷/*]/)
    if (isOp && allInputs.length === 1) allInputs = ''

    //  Don't allow consecutive '−'
    if (input === '−' && previousInput === '−') allInputs = allInputs.slice(0, -1)

    //  Don't allow consecutive '.'
    if (input === '.' && previousInput === '.') allInputs = allInputs.slice(0, -1)

    //  When consecutive operators, remove previousInput
    const consecOp = (
      previousInput
        ? input.match(/[+×÷]/) && previousInput.match(/[+×÷]/)
        : false
    )
    if (consecOp) allInputs = allInputs.slice(0, -2).concat(input)

    //  Don't allow operator after '−'
    if (isOp && previousInput === '−') allInputs = allInputs.slice(0, -1)

    return allInputs
  }

  return null
}

export { validateInput }
