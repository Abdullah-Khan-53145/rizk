import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setColorAPI } from "../actions";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Blogs from "../Components/Blogs";
function Home({ setColor }) {
  const location = useLocation();
  useEffect(() => {
    setColor(0);
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    setColor(0);
  }, []);
  const info = [
    {
      title_head: "Recipe#1",
      title: "Green Enchiladas <br /> with Homem...",
      description:
        "These Green Enchiladas are filled with chicken, cheese, and a delicious homemade tomatillo sauce. They are easy to make and perfect for a family dinner.",
      img: "/imgs/blog-1.png",
    },
    {
      title_head: "Recipe#2",
      title: " Grilled Chicken  <br /> Salad Bowl w...",
      description:
        "This Grilled Chicken Salad Bowl with Creamy Avocado Dressing is a perfect lunch or light dinner option that is packed with nutritious ingredients and bursting with flavor.",
      img: "/imgs/blog-2.png",
    },
    {
      title_head: "Recipe#3",
      title: "Avocado and <br /> Potato Breakf...",
      description:
        "This hearty breakfast hash combines creamy avocado, spicy chilli, crispy potatoes, and perfectly cooked eggs for a delicious and satisfying start to your day.",
      img: "/imgs/blog-3.png",
    },
  ];
  return (
    <div>
      <Hero />
      <Services />
      {info.map((blog, index) => (
        <Blogs
          title_head={blog.title_head}
          title={blog.title}
          description={blog.description}
          img={blog.img}
          id={index}
        />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Home);
