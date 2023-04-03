import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { Contact } from "./pages/Contact";
import { RestaurantMenu } from "./pages/RestaurantMenu";
import { Profile } from "./pages/Profile";
import { Suspense, lazy } from "react";
import { Shimmer } from "./components/Shimmer";
// import Instamart from "./pages/Instamart";

const Instamart = lazy(() => import("./pages/Instamart"));

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
