import { Game } from './Game';
import { Global } from './styled/Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styled/themes/lightTheme';
import { useState } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { DefaultTheme } from 'styled-components/dist/types';


function App() {
  const [theme, setTheme] = useState(lightTheme);
  function switchTheme(newTheme: DefaultTheme){
    setTheme(newTheme);
  }

  return (
  <ThemeProvider theme={theme}>
      <Global theme={theme}/>
      <ThemeSwitcher theme={theme} switchTheme={switchTheme}/>
      <Game/>
  </ThemeProvider>
  )
}

export default App;
