import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listProducts,
  deleteProduct,
  listVendorProducts,
  vendorCreateProduct,
  vendorDeleteProduct
} from '../actions/productAction'

const VendorProductScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const vendorProducts = useSelector((state) => state.vendorProducts)
  const { loading, error, products, page, pages } = vendorProducts

  

  const vendorProductDelete = useSelector((state) => state.vendorProductDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = vendorProductDelete

  const vendorProductCreate = useSelector((state) => state.vendorProductCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = vendorProductCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    
    if(!userInfo){
      history.push('/login')
    }
    
    dispatch({ type: 'VENDOR_PRODUCT_CREATE_RESET' })

    dispatch(listVendorProducts(match.params.vendorName))
    
    if (successCreate) {
      history.push(`/vendor/product/${userInfo.name}/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [
    dispatch,
    match,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(vendorDeleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(vendorCreateProduct())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
       
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        (userInfo && userInfo.name !== match.params.vendorName)?(
          <Message variant="danger" >You are Not Allowed to access other vendor products</Message>
          ):
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>
                  {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR'
                                      }).format(product.price)}
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                   { 
                   userInfo && <LinkContainer to={`/vendor/product/${userInfo.name}/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>}
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default VendorProductScreen
