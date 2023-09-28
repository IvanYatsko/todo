import Main from "./components/Main/Main.component";
import { AppProvider } from "./context/AppProvider.context";

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
