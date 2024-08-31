import { createBrowserRouter, RouterProviderProps } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RootLayout from "./pages/root";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ContactPage from "./pages/contactPage/ContactPage";
import SSS from "./pages/FAQPage/SSSPage";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import LoginPage from "./pages/loginPage/LoginPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/contact",
        element:<ContactPage/>
      },
      {
        path: "/FAQ",
        element: <SSS />,
      },
      {
        path: "/productDetail",
        element: <ProductDetailPage />,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      }
    ],
  },
];

const router = createBrowserRouter(routes) as RouterProviderProps["router"];

export default router;
