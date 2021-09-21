import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Comics from "./pages/comics/Comics";
import ProductEdit from "./pages/comics/ProductEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/indices"} exact component={Dashboard} />
        <Route path={"/comics"} exact component={Comics} />
        <Route path={"/products/:id/edit"} exact component={ProductEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
