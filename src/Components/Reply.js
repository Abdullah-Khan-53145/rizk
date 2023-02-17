import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/blog.css";
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

function Reply({ id, reply, index, Cmtid, setReply }) {
  const location = useLocation();
  const [cmts, setCmts] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const getComment = () => {
    const q = query(
      collection(db, `comment-blog-${parseInt(id) + 1}/${Cmtid}/replies`)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({ ...doc.data(), id: doc.id });
      });
      setCmts(comments);
    });
  };
  const addComment = async () => {
    let commentObj = {
      name,
      comment,
    };
    setName("");
    setComment("");
    const docRef = await addDoc(
      collection(db, `comment-blog-${parseInt(id) + 1}/${Cmtid}/replies`),
      commentObj
    );
    console.log("Document written with ID: ", id + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setReply(-1);
    addComment();
    console.log({
      name,
      comment,
    });
  };
  useEffect(() => {
    getComment();
  }, []);
  useEffect(() => {
    getComment();
  }, [location]);

  return (
    <>
      {cmts.length !== 0 &&
        cmts.map((cmt, index) => (
          <>
            <div style={{ marginLeft: "2rem" }} className="comment" key={index}>
              <span className="primary">
                <b>{cmt.name.split(" ")[0]}</b>
              </span>
              <span className="primary">
                {cmt.comment} <br />
              </span>
            </div>
          </>
        ))}
      <div
        className="cmt__reply"
        style={{ height: reply === index ? "2.5rem" : "0" }}
      >
        <form onSubmit={handleSubmit} className="cmt__reply__input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Reply"
          />
          <button type="submit">
            <svg
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
                d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default Reply;
