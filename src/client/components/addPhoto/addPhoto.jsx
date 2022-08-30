import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto, getPhotoById, addPhoto } from "../../redux/reducers/index";
import "./addPhoto.css";
import axios from "axios";

const AddPhoto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tags, setTags] = useState(["Cute"]);
  const [name, setname] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState("");
  //   const [state, setState] = useState({
  //     name: "",
  //     likes: [],
  //     comments: "",
  //     // tags: ["Cute"]
  //   });
  const [file, setFiles] = useState(null);
  const uploadFile = (event) => {
    setFiles(URL.createObjectURL(event.target.files[0]));
  };

  const resetFile = (event) => {
    event.preventDefault();
    setFiles(null);
  };
  const handleSubmit = () => {
    const object = { likes, comments, tags, file };

    var formdata = new FormData();
    formdata.append("profile", file);
    formdata.append("likes", "1");
    formdata.append("tagIDs", "1");
    formdata.append("commentIDs", "1");
    console.log(formdata, "formData----------")
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      headers: {
        accept: 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    };
    
    fetch("http://localhost:3000/api/photo", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // var formdata = new FormData(event.target);
    // console.log(formdata,"============formdata");
    // consoles.log(object);
    // dispatch(addPhoto(object))

    // var formData = new FormData();
    // formData.append("profile", file);
    // formData.append("likes", "1");
    // formData.append("tagIDs", "1");
    // formData.append("commentIDs", "1");
    // // for (var pair of formData.entries()) {
    // //   console.log(pair[0] + " - " + pair[1]);
    // // }
    // console.log(formData, "============formData");
    // const data = {
    //   profile: file,
    //   likes: 1,
    //   tagIDs: "Cute",
    //   commentIDs: 1,
    // };

    // const headers = {
    //   Accept: "application/json",
    // };

    // console.log(data, "DATA");

    // axios
    //   .post("http://localhost:3000/api/photo", data, { headers })
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row align-items-center mb-3">
          <div className="col">
            <h3>
              <i
                className="bi bi-arrow-left me-2"
                onClick={() => navigate("/photo/many")}
              ></i>
              Add Details
            </h3>
          </div>

          <div className="col-auto">
            <button className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>Add More
            </button>
          </div>
        </div>

        <div className="cards p-4">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  onChange={(event) => setname(event.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div>
                <label htmlFor="">Likes</label>
                <input
                  type="number"
                  className="form-control"
                  name=""
                  id=""
                  onChange={(event) => setLikes(event.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div>
                <label htmlFor="">Comments</label>
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  onChange={(event) => setComments(event.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div>
                <label htmlFor="">Tags</label>

                <TagsInput
                  className="main"
                  value={tags}
                  onChange={setTags}
                  name="tags"
                  placeHolder="Enter Tags"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="file-upload py-5">
                <div>
                  <label htmlFor="image-upload" className="image-label">
                    <img src="https://img.icons8.com/cotton/64/000000/folder-invoices--v1.png" />
                    <input
                      type="file"
                      className="d-none"
                      name=""
                      id="image-upload"
                      onChange={(e) => {
                        uploadFile(e);
                      }}
                    />
                    <h4> Browse and upload your image </h4>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {file && (
            <div style={{ textAlign: "center" }}>
              <button onClick={resetFile}>Remove File</button>
            </div>
          )}
          <img style={{ width: "50%" }} src={file} />
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={handleSubmit}>
              <i className="bi bi-save me-2"></i>Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
