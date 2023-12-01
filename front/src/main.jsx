import ReactDOM from "react-dom/client";
import App from "./App";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import ProductList from "./components/ProductList";
import ProductsListPage from "./pages/productos/ProductsListPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/productos/ProductDetailsPage";
import CrearProductoPage from "./pages/productos/CrearProductoPage";
import EditProductPage from "./pages/productos/EditProductPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";
import ChatComponent from "./components/ChatComponent";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CrearProductoForm from "./components/CrearProductoForm";


const ProductListPagePreview = lazy(() =>
  import("./pages/productos/ProductsListPage")
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <Error404Page />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "productos",
        element: (
          <Suspense fallback={<div>Cargando</div>}>
            <ProductListPagePreview />
          </Suspense>
        ),
      },
      {
        path: "productos/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "productos/:id/editar",
        element: <EditProductPage />,
      },
      {
        path: "productos/crear",
        element: <CrearProductoPage />,
        children: [
          {
            path: "",
            element: <CrearProductoForm />,
          },
        ],
      },
      {
        path: "chat",
        element: <ChatComponent />,
      },
      {
        path: "soporte", 
        element: <SupportPage />,
      },
      {
        path: "nosotros", 
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>

);
