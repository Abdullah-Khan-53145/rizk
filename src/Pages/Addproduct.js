import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import "../css/addproduct.css";
function Addproduct() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const { role } = useParams();

  const reset = () => {
    setTitle("");
    setImg("");
    setDescription("");
    setCategory("");
    setPrice("");
    setImgPreview("");
  };

  const validateForm = () => {
    // check if title is not empty
    if (!title) {
      toast.error("Title is required");
      return false;
    }

    // check if image is selected
    if (!img) {
      toast.error("Image is required");
      return false;
    }

    // check if description is not empty
    if (!description) {
      toast.error("Description is required");
      return false;
    }

    // check if category is not empty
    if (!category) {
      toast.error("Category is required");
      return false;
    }

    // check if price is not empty and it is greater than zero
    if (!price || price <= 0) {
      toast.error("Price is required and should be greater than zero");
      return false;
    }

    // if all validation passed, return true
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const metadata = {
        contentType: "image/*",
      };
      const storageRef = ref(storage, "product-imgs/" + img.name);
      const uploadTask = uploadBytesResumable(storageRef, img, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error.code);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);

            const docRef = await addDoc(collection(db, "products"), {
              title,
              img: downloadURL,
              description,
              category,
              price,
            });
            console.log("Document written with ID: ", docRef.id);
            setLoading(false);
            reset();
            toast.success("Form submitted successfully!");
          });
        }
      );
    } else {
      // show error message
    }
  };

  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
    setImgPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="add_product_paren main">
      <Toaster
        position="bottom-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            fontFamily: "Montserrat",
            borderRadius: "0",
            fontSize: "1.5rem",
            color: "#fff",
          },
        }}
      />
      <div className="add_product_child child">
        <div className={`form-container ${role}`}>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </label>
            <label htmlFor="file" className="primary-btn">
              Upload Picture
              <input type="file" id="file" onChange={handleImgChange} />
            </label>
            {imgPreview && <img src={imgPreview} alt="Selected Img" />}
            <label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </label>
            <label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="crops">Crops</option>
                <option value="fruits">Fruits</option>
                <option value="poultry">Poultry</option>
              </select>
            </label>
            <label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </label>
            <button className="primary-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
