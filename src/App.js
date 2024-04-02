import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
const Groccery = lazy(() => import("./components/Groccery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState({ userName: "", email: "" });
  console.log(userInfo, "before");
  useEffect(() => {
    setUserInfo({ userName: "Sachin Thakur", email: "sachin1004@gmail.com" });
    console.log(userInfo, "after");
  }, []);

  return (
    <UserContext.Provider
      value={{ userName: userInfo.userName, email: userInfo.email }}
    >
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Groccery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
