import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage } from '../Firebase/FirebaseConfig';
import './AddFoodDeta.css'
const AddFoodDeta = () => {

    // Food Detail Hooks
    const [foodName, setFoodName] = useState('');
    const [foodDescrieption, setFoodDescrieption] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [foodCategory, setFoodCategory] = useState('');
    const [foodImage, setFoodImage] = useState(null);
    const [foodImageUrl, setFoodImageUrl] = useState('')

    // Resturent Detail Hooks
    const [rstName, setRstName] = useState('');
    const [rstDetail, setRstDetail] = useState('');
    const [rstPhone, setRstPhone] = useState('');

    // test clg 
    // console.log(foodName);
    const handleSubmit = (e) => {
        // e.preventdefault() is not working
        if (foodImage == null) {
            alert("please Select an Image");
            return
        } else {
            const imageRef = ref(storage, `foodImage/${foodImage.name}`)
            uploadBytes(imageRef, foodImage)
                .then(() => {
                    alert("Image added suxssesfully")
                    getDownloadURL(imageRef)
                        .then((url) => {
                            // console.log(url)
                            // setFoodImageUrl(url)

                            // get all datas 
                            const foodDatas = {
                                foodName,
                                foodDescrieption,
                                foodPrice,
                                foodCategory,
                                foodImageUrl: url,
                                rstName,
                                rstDetail,
                                rstPhone,
                            }
                            try {
                                const docRef = addDoc(collection(db, 'FoodData'), foodDatas);
                                alert("document weitten with ID:", docRef.id);
                            } catch (error) {
                                alert("you find an err", error);
                            }
                        })
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
        // const foodDatas = {
        //     // foodName,
        //     // foodDescrieption,
        //     // foodPrice,
        //     // foodCategory,
        //     // foodImage,
        //     // rstName,
        //     // rstDetail,
        //     // rstPhone,
        // }
        // console.log(foodDatas)
        // try{
        //     const docRef = addDoc(collection(db, 'FoodData'), foodDatas);
        //     alert("document weitten with ID:", docRef.id);
        // }catch (error){
        //     alert("you find an err", error);
        // }
    }

    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>

                {/* Food Details */}
                <h2 className='mt-4'>Food Details</h2>
                <div>
                    <label
                        className='d-block py-2 text-primary fw-bolder'>
                        Food Name
                    </label>
                    <input
                        onChange={(e) => setFoodName(e.target.value)}
                        type='text'
                        placeholder='Food Name' />
                    <br />

                    <label
                        className='d-block py-2 text-primary fw-bolder'>
                        Food Description
                    </label>
                    <input
                        onChange={(e) => setFoodDescrieption(e.target.value)}
                        type='text'
                        placeholder='Food Description' />
                    <br />

                    <label
                        className='d-block py-2 text-primary fw-bolder'>
                        Food Price
                    </label>
                    <input
                        onChange={(e) => setFoodPrice(e.target.value)}
                        type='number'
                        placeholder='Food Price' />
                    <br />

                    <label
                        className='d-block py-2 text-primary fw-bolder'>
                        Food Category
                    </label>
                    <input
                        onChange={(e) => setFoodCategory(e.target.value)}
                        type='text'
                        placeholder='Food Category' />
                    <br />

                    <label
                        className='d-block py-2 text-primary fw-bolder'>
                        Food Image
                    </label>
                    <input
                        onChange={(e) => setFoodImage(e.target.files[0])}
                        type='file'
                        placeholder='Food Image' />
                    <br />
                </div>

                {/* Resturents Details */}
                <h4 className='mt-3'>Resturents Details</h4>
                <div>
                    <label
                        className='d-block py-2 text-danger fw-bolder '>
                        Resturent Name
                    </label>
                    <input
                        onChange={(e) => setRstName(e.target.value)}
                        type='text'
                        placeholder='Resturent Name' />
                    <br />

                    <label
                        className='d-block py-2 text-danger fw-bolder '>
                        Resturent Details
                    </label>
                    <input
                        onChange={(e) => setRstDetail(e.target.value)}
                        type='text'
                        placeholder='Resturent Details' />
                    <br />

                    <label
                        className='d-block py-2 text-danger fw-bolder '>
                        Resturent Phone Number
                    </label>
                    <input
                        onChange={(e) => setRstPhone(e.target.value)}
                        type='text'
                        placeholder='Resturent Phone Number' />
                    <br />
                </div>

                <div className='my-3'>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className='fw-bolder p-3 btn btn-success'>
                        Add Food Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddFoodDeta;