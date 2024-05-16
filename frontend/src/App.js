import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import RootLayout from "./routes/RootLayout";
import ProductsRootLayout from "./routes/ProductsRootLayout";
import AboutUs from "./routes/AboutUs";
import Cart from "./routes/Cart";
import Auth from "./routes/Auth";
import NewUser from "./routes/NewUser";
import ProductDetail from "./routes/ProductDetail"
import EditProduct from "./routes/EditProduct";
import Opg from "./routes/Opg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/proizvodi",
        element: <ProductsRootLayout />,
        children: [
          {
            path: ":productId",
            children: [
              {
                index: true,
                element: <ProductDetail />,
              },
              { path: "uredi", element: <EditProduct /> },
            ],
          },
        ],
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
      {
        path: "/registracija",
        element: <NewUser />,
      },
      {
        path: "/opg/:opgId",
        element: <Opg />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
