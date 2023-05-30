import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./pages/home/Home";
import Interstellar from "./pages/movies/Interstellar";
import BackToTheFuture from "./pages/movies/BackToTheFuture";
import Se7en from "./pages/movies/Se7en";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/interstellar" element={<Interstellar />} />
      <Route path="/backtothefuture" element={<BackToTheFuture />} />
      <Route path="/se7en" element={<Se7en />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
