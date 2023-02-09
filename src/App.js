import "./App.css";
import Home from "./Pages/Home";
import { connect } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AllBlogsPage from "./Pages/AllBlogsPage";
import BlogPage from "./Pages/BlogPage";
import Contact from "./Pages/Contact";
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
          <AllBlogsPage />
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
