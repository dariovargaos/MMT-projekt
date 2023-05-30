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
import PineappleExpress from "./pages/movies/PineappleExpress";
import StarWarsPM from "./pages/movies/StarWarsPM";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/interstellar" element={<Interstellar />} />
      <Route path="/backtothefuture" element={<BackToTheFuture />} />
      <Route path="/se7en" element={<Se7en />} />
      <Route path="/pineappleexpress" element={<PineappleExpress />} />
      <Route path="/starwarsthephantommenace" element={<StarWarsPM />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
