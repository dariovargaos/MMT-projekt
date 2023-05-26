import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Interstellar from "./pages/movies/Interstellar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/interstellar" element={<Interstellar />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
