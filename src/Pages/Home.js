import React, { useEffect } from "react";
import FarmerHero from "../Components/Blogs";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import Hero from "../Components/Hero";
import WholeSellerSec from "../Components/WholeSellerSec";
import Services from "../Components/Services";
import Blogs from "../Components/Blogs";
function Home({ setColor }) {
  useEffect(() => {
    setColor(0);
  }, []);
  const info = [
    {
      title_head: "adipisicing elit1",
      title: " ipsum, sit <br /> st, weerd",
      description:
        "Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.Dolorem laborum distinctio neque veniam assumenda Soris",
      img: "/imgs/blog-1.png",
    },
    {
      title_head: "adipisicing elit2",
      title: " ipsum, sit <br /> st, weerd",
      description:
        "   Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.Dolorem laborum distinctio neque veniam assumenda Soris",
      img: "/imgs/blog-2.png",
    },
    {
      title_head: "adipisicing elit3",
      title: " ipsum, sit <br /> st, weerd",
      description:
        "Lorem ipsum dolor sit, amet con- -sectetur adipisicing elit.Dolorem laborum distinctio neque veniam assumenda Soris",
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
