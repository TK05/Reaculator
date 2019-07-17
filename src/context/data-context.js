import React, { createContext, useContext, useReducer } from 'react'

import dataReducer from './data-reducer'

const DataStateContext = createContext()
const DataDispatchContext = createContext()

function DataProvider({ children }) {
  const defaultState = {
    input: '',
    result: ''
  }

  const [state, dispatch] = useReducer(dataReducer, defaultState)

  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  )
}

function useDataState() {
  const context = useContext(DataStateContext)
  if (context === undefined) {
    throw new Error('useDataState must be used within a DataProvider')
  }
  return context
}

function useDataDispatch() {
  const context = useContext(DataDispatchContext)
  if (context === undefined) {
    throw new Error('useDataDispatch must be used within a DataProvider')
  }
  return context
}

export { DataProvider as default, useDataState, useDataDispatch }
