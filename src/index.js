import React from 'react';
import ReactDOM from 'react-dom';

import DataProvider from './context/data-context'
import ThemeStateProvider from './context/theme-context'
import GlobalStyle from './styles/globalStyle'
import Calculator from './components/Calculator'

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <ThemeStateProvider>
        <Calculator />
      </ThemeStateProvider>
    </DataProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
