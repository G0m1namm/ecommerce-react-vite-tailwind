import {
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import {
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location'

import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from '../../components/NavBar'
import ProductsProvider from "../../providers/Products"
import ShoppingProvider from '../../providers/Shopping'
import Error from "../../components/Error"
import "../../App.css"

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

const location = new ReactLocation()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 60 * 12,
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    },
  },
})

const AppRoutes = () => {
  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: <ProductsProvider><Home /></ProductsProvider>,
          errorElement: <Error />,
          validateSearch: (search) => {
            // validate and parse the search params into a typed state
            return {
              categoryId: search.categoryId || '',
            }
          }
        },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/my-order/:id", element: <MyOrder /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
      ]}
    >
      <NavBar />
      <Outlet />
    </Router>
  )
};

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries()
        })
      }}
    >
      <ShoppingProvider>
        <AppRoutes />
      </ShoppingProvider>
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  )
}

export default App;
