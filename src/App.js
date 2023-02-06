import "./App.css";
import Home from "./Pages/Home";
import { connect } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserPage from "./Pages/UserPage";
import Addproduct from "./Pages/Addproduct";
import BlogPage from "./Pages/BlogPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import ProductPage from "./Pages/ProductPage";
import Categories from "./Components/Categories";
import About from "./Pages/About";
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
      path: "/contact",
      element: (
        <>
          <Header />
          <Contact />
          <Footer style={{ color: "black" }} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
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
