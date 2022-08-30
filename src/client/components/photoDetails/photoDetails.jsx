import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto, getPhotoById } from "../../redux/reducers/index";
import { Link, useNavigate } from "react-router-dom";
import "./photoDetails.css";
import Pagination from "react-bootstrap/Pagination";

const PhotosList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const photos = useSelector((state) => state.photo);
    console.log(photos, "-------photos -------detail");
    const photoId = new URLSearchParams(location.search).get("id");

    useEffect(() => {
        dispatch(getPhoto(photoId));
        // const found = photos.photoList.find(obj => {
        //     return obj._id === photoId;
        //   });
        // console.log(found,"========find")
    }, [dispatch]);

    const DeleteUserData = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            dispatch(deleteUser({ id: id }));
        }
    };

    return (
        <>
            <div className="container my-3">
                <div className="row align-items-center">
                    <div className="col">
                        <h3>
                            {" "}
                            <i className="bi bi-arrow-left me-2" onClick={() => navigate("/photo/many")}></i>User Photo Details
                        </h3>
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={() => navigate("/photo/")}>Add More</button>
                    </div>
                </div>

                <div className="">
                    <div className="row my-3">
                        <div className="col-sm-4">
                            <div className=" mb-3">
                                <img
                                    className="w-full rounded"
                                    src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div>
                                <div className="mb-3">
                                    <span className="badge text-bg-primary tag-box">#Cute</span>
                                    <span className="badge text-bg-primary tag-box">#Cute</span>
                                    <span className="badge text-bg-primary tag-box">#Cute</span>
                                    <span className="badge text-bg-primary tag-box">#Cute</span>
                                </div>

                                <div>
                                    <h2>Ravindra Pawar</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5>Comments(511)</h5>

                            <div className="mb-3">
                                <div className="row ">
                                    <div className="col-auto">
                                        <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png" />
                                    </div>
                                    <div className="col-4">
                                        <input
                                            type="text"
                                            className="form-control user-comments-box"
                                            placeholder="Enter your Comments"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-3">
                                    <div className="row ">
                                        <div className="col-auto">
                                            <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />
                                        </div>
                                        <div className="col-11">
                                            <div className="commenet-text">
                                                <h5 className="m-0">
                                                    Sir Ravindra Jadeja{" "}
                                                    <span className="time-comment">(1 Month Ago)</span>
                                                </h5>
                                                <p>Duniya ka Best Fielder Kon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row ">
                                        <div className="col-auto">
                                            <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />
                                        </div>
                                        <div className="col-11">
                                            <div className="commenet-text">
                                                <h5 className="m-0">
                                                    Sir Ravindra Jadeja{" "}
                                                    <span className="time-comment">(1 Month Ago)</span>
                                                </h5>
                                                <p>Duniya ka Best Fielder Kon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row ">
                                        <div className="col-auto">
                                            <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />
                                        </div>
                                        <div className="col-11">
                                            <div className="commenet-text">
                                                <h5 className="m-0">
                                                    Sir Ravindra Jadeja{" "}
                                                    <span className="time-comment">(1 Month Ago)</span>
                                                </h5>
                                                <p>Duniya ka Best Fielder Kon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row ">
                                        <div className="col-auto">
                                            <img src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />
                                        </div>
                                        <div className="col-11">
                                            <div className="commenet-text">
                                                <h5 className="m-0">
                                                    Sir Ravindra Jadeja{" "}
                                                    <span className="time-comment">(1 Month Ago)</span>
                                                </h5>
                                                <p>Duniya ka Best Fielder Kon</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotosList;
