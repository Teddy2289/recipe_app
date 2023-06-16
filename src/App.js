import {Main} from "./styled/globalStyles";
import {ThemeProvider} from "styled-components";
import Header from "./components/Header/Header";
import {theme} from "./styled/Theme";
function App() {
  return (
      <ThemeProvider theme={theme}>
         <Main>
             <Header/>
         </Main>
      </ThemeProvider>
  );
}

export default App;
