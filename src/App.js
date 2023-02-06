import "./App.css";
import Home from "./Pages/Home";
import { connect } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserPage from "./Pages/AllBlogPage";
import Addproduct from "./Pages/Addproduct";
import BlogPage from "./Pages/BlogPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductPage from "./Pages/ProductPage";
import Categories from "./Components/Categories";
function App({ color }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Categories />
          <Footer />
        </>
      ),
    },
    {
      path: "/:role/log-in",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/:role/sign-up",
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/all-blogs",
      element: (
        <>
          <Header />
          <UserPage />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: "/blog/:id",
      element: (
        <>
          <Header />
          <BlogPage />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: "/user/farmer",
      element: (
        <>
          <Header />
          <Addproduct />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: ":role/cart",
      element: (
        <>
          <Header />
          <Cart />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: "/product/:role/:id",
      element: (
        <>
          <Header />
          <ProductPage />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: ":role/checkout",
      element: (
        <>
          <Header />
          <Checkout />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <div
        className="main_background"
        style={{
          backgroundColor: `${color.colors[color.index]}`,
        }}
      ></div>
      <RouterProvider router={router} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(App);
