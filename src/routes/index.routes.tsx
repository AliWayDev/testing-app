import { Route, Routes } from "react-router-dom";
import { Organizations } from "../pages/organizations";
import { Home } from "../pages/home";

const Routers = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/org" element={<Organizations />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
      </Routes>
    </>
  );
};

export default Routers;
