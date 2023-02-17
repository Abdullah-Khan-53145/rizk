import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import { Fade } from "react-reveal";
import { connect } from "react-redux";
import "../css/blog.css";
import BlogCard from "../Components/BlogCard";
import Reply from "../Components/Reply";
const blogs = require("./blogs.json");
const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loadingCmt, setLoadingCmt] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cmt, setCmt] = useState("");
  const [cmts, setCmts] = useState([]);
  const [reply, setReply] = useState(-1);
  const colors = ["#FF9F7D", "#CEFF7D", "#FFD37D", "#7DD8FF"];
  const addComment = async () => {
    setLoadingCmt(true);
    let commentObj = {
      name,
      comment: cmt,
      email,
    };
    setName("");
    setEmail("");
    setCmt("");
    const docRef = await addDoc(
      collection(db, `comment-blog-${parseInt(id) + 1}`),
      commentObj
    );
    console.log("Document written with ID: ", id + 1);
  };
  const handleComment = (e) => {
    e.preventDefault();
    if (name.length === "") {
      toast.error("Please Enter  Name");
    } else if (email === "") {
      toast.error("Please Enter Email");
    } else if (!email.includes("@") && !email.includes(".come")) {
      toast.error("Please Enter a valid Email");
    } else if (cmt === "") {
      toast.error("Please Enter your comment");
    } else {
      addComment();
    }

    console.log({
      name,
      cmt,
      email,
    });
  };
  const getBlog = () => {
    blogs.blogs.forEach((blog) => {
      if (blog.id === id) {
        setBlog(blog);
      }
    });
  };
  const getRelatedBlogs = (data) => {
    let counter = 0;
    let dumarr = [];
    blogs.blogs.forEach((blog) => {
      if (blog.id !== id && counter <= 2) {
        dumarr.push(blog);
        counter += 1;
      }
    });
    setRelatedBlogs(dumarr);
  };
  const getComment = () => {
    const q = query(collection(db, `comment-blog-${parseInt(id) + 1}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      setCmts(comments);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getRelatedBlogs();
    getComment();
    getBlog();
  }, [id]);

  return (
    <>
      <Toaster
        position={"bottom-center"}
        reverseOrder={true}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "white",
            border: "1px solid gray",
            fontFamily: "Jost",
            borderRadius: "0",
            fontSize: "1rem",
            color: "black",
          },
        }}
      />
      {false ? (
        <h1>Not found</h1>
      ) : (
        <>
          <div className="user__page__main main blog-page">
            <Fade bottom>
              <div className="user__page__child child">
                <p>All blogs/</p>
                <h1 className="heading">{blog.title}</h1>
              </div>
            </Fade>
            <Fade>
              <div className="user__page__child child">
                <img src={blog.img} />
              </div>
            </Fade>
          </div>
          <div className="blog_main main">
            <div className="blog_child child">
              <div className="main__blog">
                <div className="main__blog__main">
                  <h1 className="primary">{blog.subTitle}</h1>
                  <p>{blog.descriptionHead}</p>
                  <div className="blog__img" style={{ background: colors[id] }}>
                    <img src={blog.img} />
                  </div>
                  <p>{blog.description}</p>

                  <div className="comments" style={{ background: colors[id] }}>
                    <h2>Comments</h2>
                    {cmts.length !== 0 ? (
                      cmts.map((cmt, index) => (
                        <>
                          <div className="comment" key={index}>
                            <span className="primary">
                              <b>{cmt.name.split(" ")[0]}</b>
                            </span>
                            <span className="primary">
                              {cmt.comment} <br />
                            </span>
                            <svg
                              onClick={() => {
                                reply === index
                                  ? setReply(-1)
                                  : setReply(index);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                              />
                            </svg>
                          </div>
                          <Reply
                            reply={reply}
                            id={id}
                            Cmtid={cmt.id}
                            index={index}
                            setReply={setReply}
                          />
                        </>
                      ))
                    ) : (
                      <h3>🤐No comments found</h3>
                    )}
                  </div>
                </div>
                <form onSubmit={handleComment} className="add__comment">
                  <h2>Leave a comment</h2>
                  <div className="comment__name">
                    <label htmlFor="name">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(!loadingCmt && e.target.value)}
                      type="text"
                      style={{ background: colors[id] }}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="comment__email">
                    <label htmlFor="email">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(!loadingCmt && e.target.value)}
                      style={{ background: colors[id] }}
                      type="email"
                      name="email"
                      id="name"
                    />
                  </div>
                  <div className="comment__comment">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                      value={cmt}
                      onChange={(e) => setCmt(!loadingCmt && e.target.value)}
                      type="textarea"
                      name="comment"
                      style={{ background: colors[id] }}
                      id="name"
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="primary-btn" type="submit">
                    {loadingCmt ? (
                      <div className="lds-circle">
                        <div></div>
                      </div>
                    ) : (
                      <div> Add Comment</div>
                    )}
                  </button>
                </form>
              </div>
              <div className="side__blog__section_main">
                <div className="side__blog__section">
                  <h1 className="primary">Related Blogs</h1>
                  <div className="related__blogs">
                    {relatedBlogs.map(
                      (blog, index) =>
                        index < 2 && (
                          <BlogCard
                            title={blog.title}
                            subTitle={blog.subTitle}
                            descriptionHead={blog.descriptionHead}
                            img={blog.img}
                            price={blog.price}
                            description={blog.description}
                            id={blog.id}
                          />
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Post;
