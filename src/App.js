import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Contact } from "./pages/Contact";
import { RestaurantMenu } from "./pages/RestaurantMenu";
import { Profile } from "./pages/Profile";
import { Suspense, lazy, useState } from "react";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./redux/App/store";
import Cart from "./pages/Cart";

const Instamart = lazy(() => import("./pages/Instamart"));

export const App = () => {
  const [user, setUser] = useState({
    name: "ritik raj",
    email: "ritikraj2629@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
// console.log(store.getState())

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
