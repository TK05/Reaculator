import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import { up } from 'styled-breakpoints'

import { useThemeState } from '../context/theme-context'
import MainDisplay from './MainDisplay'
import ResultDisplay from './ResultDisplay'
import Buttons from './Buttons'
import { backgroundColor, displayBgColor, titleTextColor } from '../styles/themes'

export default function () {
  const theme = useThemeState()

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Wrapper>
        <Title><h1>Reaculator</h1></Title>
        <CalcContainer>
          <Display>
            <MainDisplayContainer>
              <MainDisplay />
            </MainDisplayContainer>
            <ResultDisplayContainer>
              <ResultDisplay />
            </ResultDisplayContainer>
          </Display>
          <Buttons />
        </CalcContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  background: ${backgroundColor};
  font-family: "Lato", sans-serif;
  height: 100vh;

  ${up('tablet')} {
    display: grid;
    grid-template-columns: auto 500px auto;
    grid-template-rows: 100px auto;
  }
`

const Title = styled.div`
  display: none;

  ${up('tablet')} {
    align-items: center;
    display: flex;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    justify-content: center;

    h1 {
      color: ${titleTextColor};
      font-family: "Russo One", sans-serif;
      font-size: 4rem;
      margin: 0;
      text-shadow:  0px 4px 3px rgba(0,0,0,0.4),
                    0px 8px 13px rgba(0,0,0,0.1),
                    0px 18px 23px rgba(0,0,0,0.1);
    }
  }
`

const CalcContainer = styled.div`
  background: ${displayBgColor};
  display: grid;
  grid-template-rows: 35fr 65fr;
  grid-template-areas:
    "main-display"
    "buttons";
  height: 100vh;
  width: 100vw;

  ${up('tablet')} {
    border-radius: 5px 5px 10px 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .3);
    grid-column-start: 2;
    grid-row-start: 2;
    height: 750px;
    width: auto;
  }
`

const Display = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  display: grid;
  grid-area: main-display;
  grid-template-rows: 4fr 2fr;
  grid-template-areas:
    "upper"
    "lower";
  padding: 1rem;
  z-index: 200;
`

const MainDisplayContainer = styled.div`
  align-self: center;
  grid-area: upper;
`

const ResultDisplayContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: lower;
  justify-content: flex-end;
`
