import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/homePage";
import ContactPage from "./Pages/contactPage";
import ProductsPage from "./Pages/productsPage";
import categoriesData from "./components/products/categoryData";
import SingleCategoryPage from "./Pages/singleCategoryPage";
import SingleProductPage from './Pages/singleProductPage';

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: (
      <div className="flex justify-center items-center">
        ..~.. sry UwU ..~..
      </div>
    ),
  },
  {
    path: "/products/:category",
    element: <SingleCategoryPage />,
    loader: ({ params }) => {
      const category = params.category;

      const data = categoriesData.find((obj) => obj.name === category);

      return data;
    },
  },
  {
    path: "/products/:category/:productName",
    element: <SingleProductPage />,
    loader: ({ params }) => {
      const category = params.category;
      const productName = params.productName;

      console.log(productName);

      const categoryData = categoriesData.find((obj) => obj.name === category);
      const productData = categoryData.products.find(
        (item) => item.name === productName
      );

      return productData;
    },
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: (
      <div className="flex justify-center items-center">
        ..~.. sry UwU ..~..
      </div>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: (
      <div className="flex justify-center items-center">
        ..~.. sry UwU ..~..
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
