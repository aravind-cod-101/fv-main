import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listUnPublishedProducts,
  deleteProduct,
  createProduct,
  listProducts,
} from '../actions/productAction'
import { Link } from 'react-router-dom'

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const ProductList = useSelector((state) => state.productList)
  const { loading:publishedloading,
          error: publishederror, 
          products:publishedProducts, 
          page, 
          pages 
        } = ProductList

const unPublishedProductList = useSelector((state) => state.unPublishedProductList)
const { 
  loading:unpublishedloading,
  error:unpublishederror,
  products:unPublishedProducts, 
      } = unPublishedProductList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: 'PRODUCT_CREATE_RESET' })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`)
    } else {
      dispatch(listProducts('',page))
      dispatch(listUnPublishedProducts())
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Published Products</h1>
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
      {publishedloading ? (
        <Loader />
      ) : publishederror ? (
        <Message variant='danger'>{publishederror}</Message>
      ) : (
      
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PUBLISHED</th>
                <th></th>
              </tr>
            </thead>
           
            <tbody>
              {publishedProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td><Link to={`/product/${product._id}`}>{product.name}</Link></td>
                  <td>
                  {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR'
                                      }).format(product.price)}
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                  {product.isPublished ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
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
        <h1>Unpublished Products</h1>
      {publishedloading ? (
        <Loader />
      ) :  unpublishederror ? (
        <Message variant='danger'>{publishederror}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PUBLISHED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {unPublishedProducts.map((product) => (
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
                  {product.isPublished ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
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

export default ProductListScreen