import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productAction'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [isPublished,setIsPublished] = useState(false)
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [multipleUploading, setMultipleUploading] = useState(false)
  const [images, setImages] = useState([])


  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  
  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: 'PRODUCT_UPDATE_RESET' })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setIsPublished(product.isPublished)
        setCountInStock(product.countInStock)
        setDescription(product.description)
        setImages(product.subImages)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    console.log(file)
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)
      console.log(data)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const fileNames = []

  const uploadFileHandler2 = async (e) => {
    const uploadfiles = e.target.files
    const uploadedFiles = []
    Object.entries(uploadfiles).forEach(async item =>{
      const formData = new FormData()
      fileNames.push(item[name])
      formData.append('image', item[1])
      setMultipleUploading(true)
 
      try {
             const config = {
               headers: {
                 'Content-Type': 'multipart/form-data',
               },
             }
       
             const { data } = await axios.post('/api/upload', formData, config)
             console.log(data)
             uploadedFiles.push(data)
             console.log(uploadedFiles)
             setMultipleUploading(false)
           } catch (error) {
             console.error(error)
             setMultipleUploading(false)
           }
    }

    
   );
   setImages(uploadedFiles)
   console.log(images)
   console.log(fileNames)
   alert(`SuccesFully uploaded ${fileNames.length} images `)


  // Object.entries(uploadfiles).forEach(async item =>{
  //     const file = uploadfiles[item]
  //     console.log(file)
  //     const formData = new FormData()
  //     formData.append('image', file)
  //     setUploading(true)
  //     let fileNames = []
  
  //     try {
  //       const config = {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  
  //       const { data } = await axios.post('/api/upload/images', formData, config)  
  //       fileNames.push(data)
  //       setImages([
  //         ...images,data
  //       ])
  //       console.log(images)
  //       setUploading(false)
  //     } catch (error) {
  //       console.error(error)
  //       setUploading(false)
  //     }
  //  })
  //   // uploadfiles.forEach(item => {console.log(item[0])})
   
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
        isPublished,
        images
      })
    )
  }

  const productImages = []

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label><br />
              <img src={image} style={{height:'70px', width:'70px'}} />
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Add Image'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='subimage'>
              <Form.Label>Sub Images</Form.Label>
              {/* { productImages = [...product.subImages]}
              {productImages.map(image => {
              <img key={image} src={image} style={{height:'70px', width:'70px'}} />
              })} */}
              {fileNames.map(name => {
              <Form.Control
                type='text'
                placeholder={name}
                // value={brand}
                onChange={(e) => fileNames.push(e.target.value)}
              ></Form.Control>
              })}
              <Form.File
                id='sub-image-file'
                label='Choose File'
                custom
                multiple
                onChange={uploadFileHandler2}
              ></Form.File>
              {multipleUploading && <Loader />}
            </Form.Group>






            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Check
                type='checkbox'
                label='Is published'
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
              ></Form.Check>


            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
