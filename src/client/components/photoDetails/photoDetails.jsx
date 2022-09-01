import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPhoto,
  getPhotoById,
  removePhoto,
  
} from "../../redux/reducers/index";

import { getCommentById ,createComment} from "../../redux/reducers/commentReducer/comment";
import { setTag,appendTag, createTag, getTagById} from "../../redux/reducers/tagReducer/tag";
import { Link, useNavigate } from "react-router-dom";
import "./photoDetails.css";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { TagsInput } from "react-tag-input-component";

const PhotosList = () => {
  const [userComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newTags, setNewTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photos = useSelector((state) => state.photo);
  const comments = useSelector((state) => state.comment.comments);
  const tagList = useSelector((state) => state.tag.tags);


  const photoId = new URLSearchParams(location.search).get("id");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPhotoById(photoId));
  }, [dispatch]);

  const getTagsById = async () => {
    dispatch(getTagById(photos?.photoList?.tagIDs))
    
  };

  const getComments = async () => {
   dispatch(getCommentById(photos?.photoList?.commentIDs))
  };

  useEffect(() => {
    if(photos!== undefined){
      getComments();
      getTagsById();
    }
   
  }, [photos]);

  useEffect(() => {
    setUserComments(comments)
    setNewComment("")
  }, [comments]);

  const DeletePhotoData = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      dispatch(removePhoto(id));
      navigate("/photo/many");
    }
  };

  const handleUpdateComment = async (e) => {
    if (e.key === "Enter") {
      dispatch(createComment({
        photoID: photoId,
        content: e.target.value,
      }))
    }
  };
  const AddTags = async () => {
    dispatch(createTag({tags:tags,photoId:photoId}))
  };

  return (
    <>
      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col">
            <h3>
              {" "}
              <i
                className="bi bi-arrow-left me-2"
                onClick={() => navigate("/photo/many")}
              ></i>
              User Photo Details
            </h3>
            <button
              className="btn btn-danger"
              onClick={() => DeletePhotoData(photoId)}
            >
              Remove
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/photo/update?id=${photoId}`)}
            >
              Update
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/photo/")}
            >
              Add More
            </button>
          </div>
        </div>

        <div className="">
          <div className="row my-3">
            <div className="col-sm-4">
              <div className=" mb-3">
                <img
                  className="w-full rounded"
                  src={`http://localhost:3000/public/${photos?.photoList?.photoUrl}`}
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-8">
              <div>
                <div className="mb-3">
                  {tagList!==undefined 
                    ? tagList.map((d, i) => (
                        <span key={i} className="badge text-bg-primary tag-box">
                          {d.name}
                        </span>
                      ))
                    : null}
                </div>

                <div>
                  <h2>User</h2>
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
                  <button
                    style={{ marginTop: "5px" }}
                    className="btn btn-primary"
                    onClick={() => AddTags()}
                  >
                    <i className="bi bi-plus-circle me-2"></i>Add Tags
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              style: "flex",
              border: "2px solid red",
              flexDirection: "row",
            }}
          >
            <div>
              <div className="mb-3">
               { comments!==undefined && ( <h5>Comments {comments.length}</h5>)}
                <div className="row ">
                  <div className="col-auto">
                    <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png" />
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="form-control user-comments-box"
                      placeholder="Enter your Comments"
                      name=""
                      id=""
                      onKeyDown={(e) => handleUpdateComment(e)}
                    />
                  </div>
                </div>
              </div>

              <div>
                {userComments.map((d, idx) => (
                  <div className="mb-3" key={idx}>
                    <div className="row ">
                      <div className="col-auto">
                        <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />
                      </div>
                      <div className="col-11">
                        <div className="commenet-text">
                          <h5 className="m-0">
                             User
                            <span className="time-comment">(1 Month Ago)</span>
                          </h5>

                          <p>{d.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotosList;
