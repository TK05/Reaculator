import theme from 'styled-theming'

export const themeNames = [
  'default',
  'denver',
  'jomez',
  'vegas',
]

export const backgroundColor = theme('mode', {
  default: 'rgb(145, 175, 175)', // green
  jomez: '#343434',  // grey
  denver: 'white',
  vegas: 'white',
})

export const borderColor = theme('mode', {
  default: 'rgb(210, 210, 210)', // light grey
  jomez: '#062c69', //  dark blue
  denver: '#8B2131',  //  flatirons red
  vegas: '#A03123', //  scarlet dark
})

export const buttonBgColor = theme('mode', {
  default: 'rgb(237, 237, 237)',  //  lighter grey
  jomez: '#003897', //  blue
  denver: '#0E2240',  //  midnight blue
  vegas: '#E31837', //  scarlet
})

export const buttonBgHoverColor = theme('mode', {
  default: 'rgb(214, 214, 214)',  //  lighter grey - darken
  jomez: '#062c69', //  dark blue
  denver: '#153463',  //  midnight blue - lighten
  vegas: '#A03123', //  scarlet dark
})

export const caretColor = theme('mode', {
  default: 'rgb(33, 93, 191)',  //  blue
  jomez: '#003897', //  blue
  denver: '#8B2131',  //  flatirons red
  vegas: '#A03123', //  scarlet dark
})

export const displayBgColor = theme('mode', {
  default: 'white',
  jomez: '#32feba',  // light green
  denver: '#fec524',  //  sunshine yellow
  vegas: '#9FA1A4', //  gray
})

export const displayTextColor = theme('mode', {
  default: 'black',
  jomez: 'black',
  denver: '#0E2240',  //  midnight blue
  vegas: 'black',
})

export const menuBarColor = theme('mode', {
  default: 'rgb(33, 93, 191)',  //  blue
  jomez: '#32feba',  // light green
  denver: '#0E2240',  //  midnight blue
  vegas: '#9FA1A4', //  gray
})

export const menuBarHoverColor = theme('mode', {
  default: 'rgb(20, 59, 122)',  //  darker blue
  jomez: '#428da5',  // light blue
  denver: '#fec524',  //  sunshine yellow
  vegas: '#E31837', //  scarlet
})

export const menuBarIconColor = theme('mode', {
  default: 'white',
  jomez: '#062c69', //  dark blue
  denver: '#8B2131',  //  flatirons red
  vegas: 'black',
})

export const menuBgColor = theme('mode', {
  default: 'rgb(33, 93, 191)',  //  blue
  jomez: '#003897', //  blue
  denver: '#1D428A',  //  skyline blue
  vegas: '#6A737B', //  gray dark
})

export const menuTextPrimaryColor = theme('mode', {
  default: 'white',
  jomez: 'white',
  denver: 'white',
  vegas: 'black',
})

export const menuTextSecondaryColor = theme('mode', {
  default: 'white',
  jomez: '#32feba',  // light green
  denver: '#fec524',  //  sunshine yellow
  vegas: '#E31837', //  scarlet
})

export const numberTextColor = theme('mode', {
  default: 'rgb(30, 30, 30)',  // black
  jomez: 'white',
  denver: 'white',
  vegas: 'black',
})

export const operatorTextColor = theme('mode', {
  default: 'rgb(33, 93, 191)',  //  blue
  jomez: '#32feba',  // light green
  denver: '#fec524',  //  sunshine yellow
  vegas: 'white',
})

export const operatorBgColor = theme('mode', {
  default: 'rgb(237, 237, 237)',  //  lighter grey
  jomez: '#062c69', //  dark blue
  denver: '#8B2131',  //  flatirons red
  vegas: '#A03123', //  scarlet dark
})

export const operatorBgHoverColor = theme('mode', {
  default: 'rgb(214, 214, 214)',  //  lighter grey - darken
  jomez: '#003897', //  blue
  denver: '#631723',  //  flatirons red - darken
  vegas: '#E31837', //  scarlet
})

export const resultTextColor = theme('mode', {
  default: 'rgb(125, 125, 125)',  //  grey
  jomez: '#428da5',  // light blue
  denver: '#8B2131',  //  flatirons red
  vegas: '#A03123', //  scarlet dark
})

export const titleTextColor = theme('mode', {
  default: 'white',
  jomez: '#32feba',  // light green
  denver: '#153463',  //  midnight blue - lighten
  vegas: 'black',
})
