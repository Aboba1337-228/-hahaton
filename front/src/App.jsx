import { Route, Routes } from "react-router-dom";
import Graphic from "./components/Graphic";
import Landing from "./components/Landing";
import ParserXmls from "./components/ParserXmls";
import Users from "./components/Users";
import XlsxSlice from "./features/xlsxSlice";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <ParserXmls />
              </div>
              <div className="container">
                <Users />
              </div>
            </>
          }
        />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
