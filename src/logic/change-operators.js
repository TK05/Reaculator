//  Flip operators to either be correct visually or for calculation purposes
const changeOperators = (input, toVisual = false) => {
  const opRegEx = [
    [
      [new RegExp("[/]", "g"), '÷'],
      [new RegExp("[*]", "g"), '×'],
      [new RegExp("[-]", "g"), '−'],
    ],
    [
      [new RegExp("[÷]", "g"), '/'],
      [new RegExp("[×]", "g"), '*'],
      [new RegExp("[−]", "g"), '-'],
    ]
  ]

  const index = toVisual ? 0 : 1

  opRegEx[index].forEach(operator => {
    input = input.replace(operator[0], operator[1])
  })

  return input
}

export { changeOperators }
