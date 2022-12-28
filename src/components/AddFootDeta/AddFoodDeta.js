import React, { useState } from 'react';
import './AddFoodDeta.css'
const AddFoodDeta = () => {

    // Food Detail Hooks
    const [foodName, setFoodName] = useState('');
    const [foodDescrieption, setFoodDescrieption] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodImage, setFoodImage] = useState('');
    const [foodCategory, setFoodCategory] = useState('');

    // Resturent Detail Hooks
    const [rstName, setRstName] = useState('');
    const [rstDetail, setRstDetail] = useState('');
    const [rstPhone, setRstPhone] = useState('');

    // const [rstImage, setRstImage] = useState('');
    // const [rstCategory, setRstCategory] = useState('');

    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>

                {/* Food Details */}
                <h2 className='mt-4'>Food Details</h2>
                <div>
                    <label className='d-block py-2 text-primary fw-bolder'>Food Name</label>
                    <input placeholder='Food Name' />
                    <br />

                    <label className='d-block py-2 text-primary fw-bolder'>Food Description</label>
                    <input placeholder='Food Description' />
                    <br />

                    <label className='d-block py-2 text-primary fw-bolder'>Food Price</label>
                    <input type='number' placeholder='Food Price' />
                    <br />

                    <label className='d-block py-2 text-primary fw-bolder'>Food Category</label>
                    <input type='text' placeholder='Food Category' />
                    <br />
                    
                    <label className='d-block py-2 text-primary fw-bolder'>Food Image</label>
                    <input type='file' placeholder='Food Image' />
                    <br />
                </div>

                {/* Resturents Details */}
                <h4 className='mt-3'>Resturents Details</h4>
                <div>
                    <label className='d-block py-2 text-danger fw-bolder '>Resturent Name</label>
                    <input type='text' placeholder='Resturent Name' />
                    <br />

                    <label className='d-block py-2 text-danger fw-bolder '>Resturent Details</label>
                    <input type='text' placeholder='Resturent Details' />
                    <br />

                    <label className='d-block py-2 text-danger fw-bolder '>Resturent Phone Number</label>
                    <input type='text' placeholder='Resturent Phone Number' />
                    <br />
                </div>

                <div className='my-3'>
                    <button type="button" className='fw-bolder p-3 btn btn-success'>Add Food Data</button>
                </div>
            </div>
        </div>
    );
};

export default AddFoodDeta;