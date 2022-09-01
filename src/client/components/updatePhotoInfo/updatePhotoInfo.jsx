import React, { useState, useEffect } from "react";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPhoto,
  getPhotoById,
  addPhoto,
  updatePhotoInfo,
} from "../../redux/reducers/index";
import "./updatePhotoInfo.css";

const UpdatePhoto = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tags, setTags] = useState(["Cute"]);
  const [name, setname] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState("");
  const photoId = new URLSearchParams(location.search).get("id");
  const photos = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getPhotoById(photoId));
    if (photos?.photoList && photos?.photoList!=undefined) {
    //   setTags(photos?.photoList?.tagIDs);
      setname(photos?.photoList?.name);
      setLikes(photos?.photoList?.likes);
      setComments(photos?.photoList?.commentIDs);
    }
  }, [dispatch]);
  const handleSubmit = async () => {
    const object = { likes, comments, tags, name, photoId};
    dispatch(updatePhotoInfo(object));
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
              Update Details
            </h3>
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
                  value={name}
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
                  value={likes}
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
                  value={comments}
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
                />
              </div>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-success" onClick={handleSubmit}>
              <i className="bi bi-save me-2"></i>Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePhoto;
