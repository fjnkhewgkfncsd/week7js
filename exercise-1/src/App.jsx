import Header from "./components/header";
import DisplayScore from "./components/score";
import { HTML_RESULTS } from "./data";
import "./index.css";

function App() {
  return (
    <>
      <Header batch="2021" />
      <DisplayScore course="HTML" data={HTML_RESULTS} />
    </>
  );
}

export default App;
