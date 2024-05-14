import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import AboutUs from "./routes/AboutUs";
import Cart from "./routes/Cart";
import Auth from "./routes/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/proizvodi",
        element: <Products />,
      },
      {
        path: "/favoriti",
        element: <AboutUs />,
      },
      {
        path: "/kosarica",
        element: <Cart />,
      },
      {
        path: "/prijava",
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
