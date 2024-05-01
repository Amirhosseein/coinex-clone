import MainPage from "./MainPage/MainPage";

import NotFoundPage from "./404Page/404Page";
import Coin from "./Coin/Coin";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/coin/:coinId",
    element: <Coin />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
















// this code create by AmirHossein Khakshouri Sani with 💙