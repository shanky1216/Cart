import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import CartContextProvider from "./store/cart-context.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Checkout from "./pages/Checkout.jsx";
import Order from "./pages/Order.jsx";
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Shop /> },
      { path: "checkout", element: <Checkout /> },
      {
        path: "order",
        children: [
          { path: "", element: <Order /> },
          { path: ":productId", element: <Details /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartContextProvider>
  );
}

export default App;
