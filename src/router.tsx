import { BrowserRouter, Route, Routes } from "react-router-dom";
import { constants } from "./shared/constants";
import Home from "./pages";
import Detail from "./pages/detail";
function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Routes>
        <Route path={constants.home} element={<Home />} />
        <Route path={`/detail`} element={<Detail />} />
        <Route path={`/detail/:id`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
