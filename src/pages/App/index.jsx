import { BrowserRouter, useRoutes } from "react-router-dom"

import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from '../../components/NavBar'
import ProductsProvider from "../../providers/Products"
import ShoppingProvider from '../../providers/Shopping'
import "../../App.css"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <ProductsProvider><Home /></ProductsProvider> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes
};

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App;
