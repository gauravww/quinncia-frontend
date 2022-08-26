import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhoto } from '../../redux/reducers/index';
import { Link } from "react-router-dom";
import "./photosList.css"
import Pagination from 'react-bootstrap/Pagination';

const PhotosList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.photo);
  console.log(users, "=================users")
  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch])

  const DeleteUserData = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      dispatch(deleteUser({ id: id }))
    }
  }

  return (
    <>


      <div className='container my-3'>

        <div className='row align-items-center'>
          <div className='col'>
            <h3>Hi! Ravindra</h3>
          </div>

          <div className='col-sm-3'>
            <div class="form-group has-search">
              <span class="bi bi-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>

          <div className='col-auto'>
              <button className='btn btn-primary'><i class="bi bi-file-arrow-up me-2"></i>Upload Image</button>
          </div>
        </div>

        <div className=''>
          <div className='row my-3'>
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
          </div>

          <div className='my-5'>

            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
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

      {/* {users?.userData ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {users?.userData.map((item, i) => (
                <tr>
                  <td>
                    <b>{item.id}</b>
                  </td>
                  <td>
                    <b>{item.firstName}</b>
                  </td>
                  <td>
                    <b>{item.lastName}</b>
                  </td>
                  <td>
                    <b>{item.email}</b>
                  </td>
                  <td>
                    <div className='icon'>
                      <Link to={`/update` + `?id=${item.id}`}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                      <span onClick={() => DeleteUserData(item.id)}>
                        <FontAwesomeIcon icon={faTrashAlt} color="red" />
                      </span>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Spinner animation="border" variant="primary" />

      )} */}
    </>

  )
}

export default PhotosList;