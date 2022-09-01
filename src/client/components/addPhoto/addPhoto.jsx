import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto, getPhotoById, addPhoto } from "../../redux/reducers/index";
import "./addPhoto.css";
import axios from "axios";
import { useEffect } from "react";

const AddPhoto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tags, setTags] = useState(["Cute"]);
  const [name, setname] = useState("");

  const [file, setFiles] = useState(null);
  const [disfile, setDisFile] = useState(null);
  const photos = useSelector((state) => state.photo);
  const uploadFile = (event) => {
    setDisFile(URL.createObjectURL(event.target.files[0]));
    setFiles(event.target.files[0]);
  };
  
  const resetFile = (event) => {
    event.preventDefault();
    setFiles(null);
  };
  const handleSubmit = async () => {
    const object = {file, name };
    dispatch(addPhoto(object));
     navigate("/photo/many");   
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
            {/* <div className="col-sm-6 mb-3">
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
            </div> */}
            {/* <div className="col-sm-6 mb-3">
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
            </div> */}
            {/* <div className="col-sm-6 mb-3">
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
            </div> */}
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
          <img style={{ width: "50%" }} src={disfile} />
          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={()=>handleSubmit()}>
              <i className="bi bi-save me-2"></i>Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
