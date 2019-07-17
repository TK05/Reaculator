import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { up } from 'styled-breakpoints'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { IoIosCheckmark } from 'react-icons/io'
import { GoMarkGithub } from 'react-icons/go'

import { useThemeState, useThemeDispatch } from '../context/theme-context'
import {
  menuBarColor,
  menuBarHoverColor,
  menuBarIconColor,
  menuBgColor,
  menuTextPrimaryColor,
  menuTextSecondaryColor,
  themeNames
} from '../styles/themes'

export default function () {
  const currentTheme = useThemeState()
  const themeDispatch = useThemeDispatch()
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  const handleChangeTheme = theme => {
    themeDispatch(theme)

    //  Save theme to localStorage
    const themeJSON = JSON.stringify(theme)
    localStorage.setItem('theme', themeJSON)
  }

  return (
    <React.Fragment>
      <Overlay className={isVisible && 'is_visible'} />
      <Toggle
        className={isVisible && 'is_visible'}
        onClick={handleToggle}
      >
        {isVisible ? <FaAngleRight /> : <FaAngleLeft />}
      </Toggle>
      <Menu className={isVisible && 'is_visible'}>
        <Header><span>select-a-theme</span></Header>
        {themeNames.map((theme) => (
          <Option
            key={theme}
            onClick={handleChangeTheme.bind(this, theme)}
            className={theme === currentTheme && 'active'}
          >
            <span>{theme.toUpperCase()}<IoIosCheckmark /></span>
          </Option>
        ))}
        <Footer>
          <span><a href="https://github.com/TK05/Reaculator">Source Code <GoMarkGithub /></a></span>
          <span><a href="/">lightweightpaint</a></span>
        </Footer>
      </Menu>
    </React.Fragment>
  )
}

const Toggle = styled.div`
  align-items: center;
  background: ${menuBarColor};
  border-radius: 0 0 5px 0;
  color: ${menuBarIconColor};
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  justify-content: center;
  transition: background 0.3s ease-in-out;
  z-index: 100;

  &.is_visible {
    border-radius: 0;
    grid-column: 2 / 3;
  }

  svg {
    transform: scale(1);
    transition: transform 0.3s;
  }

  &:hover {
    background: ${menuBarHoverColor};
    transition: background 0.3s ease-in-out;
  }

  &:hover svg {
    transform: scale(1);
    transition: transform 0.3s;
  }

  ${up('tablet')} {
    &:hover svg {
      transform: scale(1.25);
    }
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, .5);
  border-radius: 0 0 0 5px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: none;
  z-index: 100;

  &.is_visible {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Menu = styled.div`
  background: ${menuBgColor};
  grid-column: 3 / 6;
  grid-row: 1 / 2;
  display: none;
  z-index: 100;

  &.is_visible {
    border-radius: 0 0 5px 0;
    display: grid;
    grid-gap: 5px;
    grid-template-rows: 100px repeat(${themeNames.length}, 35px) auto 100px;
    padding-left: 25px;
    padding-right: 50px;
  }
`

const Header = styled.div`
  align-items: flex-end;
  display: flex;
  grid-row: 1 / 2;
  justify-content: center;

  span {
    color: ${menuTextSecondaryColor};
    cursor: default;
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 10px;
    text-shadow:  0px 4px 3px rgba(0,0,0,0.4),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1);
  }

  ${up('tablet')} {
    span {
      font-size: 2rem;
    }
  }
`

const Option = styled.div`
  align-items: center;
  color: ${menuTextPrimaryColor};
  cursor: pointer;
  display: flex;
  justify-content: center;

  span {
    align-items: center;
    background-image: linear-gradient(
      to right,
      ${menuBarHoverColor} 0,
      ${menuBarHoverColor} 100%);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    margin: 0;
    padding: 0 6px 0 30px;
    transition: background .5s;
  }

  &:hover span {
    background-size: 100% 100%;
  }

  svg {
    font-size: 2rem;
    margin-right: -8px;
    visibility: hidden;
  }

  &.active svg {
    visibility: visible;
  }
`

const Footer = styled.div`
  align-items: center;
  border-radius: 0 0 5px 0;
  display: flex;
  flex-direction: column;
  grid-row-start: -1;
  justify-content: space-evenly;

  span {
    font-size: 1.25rem;
    margin: 0;
    padding-bottom: 10px;
    text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
  }

  a {
    color: ${menuTextSecondaryColor};
    text-decoration: none;
    text-shadow:  0px 4px 3px rgba(0,0,0,0.4),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1);
  }

  svg {
    font-size: 1.5rem;
    margin-bottom: -5px;
    padding-left: 10px;
    text-shadow:  0px 4px 3px rgba(0,0,0,0.4),
                  0px 8px 13px rgba(0,0,0,0.1),
                  0px 18px 23px rgba(0,0,0,0.1);
  }

  a:hover {
    color: ${menuTextPrimaryColor};
  }
`
