import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhoto } from "../../redux/reducers/index";
import { Link, useNavigate } from "react-router-dom";
import "./photosList.css";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

const PhotosList = () => {
  const [perPage] = useState([10]);
  const [page, setPage] = useState([0]);
  const [pages, setPages] = useState([0]);
  const [photoList, setPhotoList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photos = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  useEffect(() => {
    if (photos?.photoList && photos?.photoList?.length > 0) {
      setPages(Math.ceil(photos?.photoList?.length / perPage));
    }
  });


  const handleSearchPhotoList = (event) => {
    event.preventDefault();
    const searchParam = event.target.value;
    if (searchParam && searchParam.length > 2) {
      setPhotoList(
        photos?.photoList.filter((item) =>
          item.name.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else {
      setPhotoList(photos?.photoList);
      setPages(Math.ceil(photos?.photoList.length / perPage));
    }
  };
  const handlePageClick = (e, p) => {
    setPage(e);
  };
  useEffect(() => {
    if (photos?.photoList && photos?.photoList?.length) {
      setPages(Math.ceil(photos?.photoList?.length / perPage));
      setPhotoList(photos?.photoList);
    }
  }, [photos?.photoList]);
  let photoListPagination = photoList
    ? photoList.slice(page * perPage, (page + 1) * perPage)
    : photoList;

  // const DeleteUserData = (id) => {
  //   var result = window.confirm("Want to delete?");
  //   if (result) {
  //     dispatch(deleteUser({ id: id }))
  //   }
  // }

  return (
    <>
      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col">
            <h3>Hi! Ravindra</h3>
          </div>

          <div className="col-sm-3">
            <div className="form-group has-search">
              <span className="bi bi-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => handleSearchPhotoList(e)}
              />
            </div>
          </div>

          <div className="col-auto">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/photo/")}
            >
              <i className="bi bi-file-arrow-up me-2"></i>Upload Image
            </button>
          </div>
        </div>

        <div className="">
          {photoListPagination && photoListPagination.length > 0 ? (
            <>
              {photoListPagination.map((item, i) => (
                <div className="row my-3">
                  <div className="col-sm-3">
                    <div className="image-sec mb-3">
                      <img
                        onClick={() => navigate(`/photo/detail?id=${item._id}`)}
                        className="w-full"
                        src={`http://localhost:3000/public/${item.photoUrl}`}
                        alt=""
                      />
                      <div className="image-dec p-2">
                        <p>{item?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Loading..........</p>
          )}
          {/* <div className='row my-3'>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='image-sec mb-3'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2022/08/14/19/20/hummingbird-hawk-moth-7386464_960_720.jpg" alt="" />

                <div className='image-dec p-2'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quo suscipit quaerat iure, architecto odit culpa iusto dolore accusantium quae dolor minima, nostrum, in tenetur porro molestias quod veritatis. Consequuntur!</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="my-5">
            {/* {photoListPagination.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageClick(index + 1)}
              key={index + 1}
              active={index + 1 === 1}
            >
              {index + 1}
            </Pagination.Item>
          );
        })} */}
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{pages}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotosList;
