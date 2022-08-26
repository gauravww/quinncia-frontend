import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "./addPhoto.css"

const AddPhoto = () => {
    const [selected, setSelected] = useState(["Cute"]);

    return (
        <>


            <div className='container my-3'>
                <div className='row align-items-center mb-3'>
                    <div className='col'>
                        <h3><i class="bi bi-arrow-left me-2" ></i>Add Details</h3>
                    </div>

           

                    <div className='col-auto'>
                        <button className='btn btn-primary'><i class="bi bi-plus-circle me-2"></i>Add More</button>
                    </div>
                </div>

                <div className="cards p-4">
                    <div className='row'>
                        <div className='col-sm-6 mb-3'>
                            <div>
                                <label htmlFor="">Name</label>
                                <input type="text" className='form-control' name="" id="" />
                            </div>
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <div>
                                <label htmlFor="">Likes</label>
                                <input type="number" className='form-control' name="" id="" />
                            </div>
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <div>
                                <label htmlFor="">Comments</label>
                                <input type="text" className='form-control' name="" id="" />
                            </div>
                        </div>
                        <div className='col-sm-6 mb-3'>

                            <div>
                                <label htmlFor="">Tags</label>

                                <TagsInput className="main"
                                    value={selected}
                                    onChange={setSelected}
                                    name="fruits"
                                    placeHolder="Enter Tags"
                                />

                            </div>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='file-upload py-5'>
                                <div>
                                    <label htmlFor="image-upload" className="image-label">
                                        <img src="https://img.icons8.com/cotton/64/000000/folder-invoices--v1.png" />
                                        <input type="file" className='d-none' name="" id="image-upload" />
                                        <h4> Browse and upload your image </h4>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

<div className="text-end mt-3">
<button className='btn btn-success'><i class="bi bi-save me-2"></i>Submit</button>
</div>
                </div>


            </div>

        </>

    )
}

export default AddPhoto;