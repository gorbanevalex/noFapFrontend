import { Registration } from "pages/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
