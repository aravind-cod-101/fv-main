export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const unPublishedProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'UNPUBLISHED_PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'UNPUBLISHED_PRODUCT_LIST_SUCCESS':
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case 'UNPUBLISHED_PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailReducer = (state={product:{reviews:[]}}, action) =>{
    switch (action.type){
        case 'PRODUCT_DETAILS_REQUEST':
            return {loading:true, ...state}
        case 'PRODUCT_DETAILS_SUCCESS':
            return {loading:false,product:action.payload}
        case 'PRODUCT_DETAILS_ERROR':
            return {loading:false,error:action.payload}
        default:
            return state
    }
}


export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PRODUCT_DELETE_REQUEST':
        return { loading: true }
      case 'PRODUCT_DELETE_SUCCESS':
        return { loading: false, success: true }
      case 'PRODUCT_DELETE_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const vendorProductDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case 'VENDOR_PRODUCT_DELETE_REQUEST':
        return { loading: true }
      case 'VENDOR_PRODUCT_DELETE_SUCCESS':
        return { loading: false, success: true }
      case 'VENDOR_PRODUCT_DELETE_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'PRODUCT_CREATE_REQUEST':
        return { loading: true }
      case 'PRODUCT_CREATE_SUCCESS':
        return { loading: false, success: true, product: action.payload }
      case 'PRODUCT_CREATE_FAIL':
        return { loading: false, error: action.payload }
      case 'PRODUCT_CREATE_RESET':
        return {}
      default:
        return state
    }
  }

  export const vendorProductCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'VENDOR_PRODUCT_CREATE_REQUEST':
        return { loading: true }
      case 'VENDOR_PRODUCT_CREATE_SUCCESS':
        return { loading: false, success: true, product: action.payload }
      case 'VENDOR_PRODUCT_CREATE_FAIL':
        return { loading: false, error: action.payload }
      case 'VENDOR_PRODUCT_CREATE_RESET':
        return {}
      default:
        return state
    }
  }
  
  export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case 'PRODUCT_UPDATE_REQUEST':
        return { loading: true }
      case 'PRODUCT_UPDATE_SUCCESS':
        return { loading: false, success: true, product: action.payload }
      case 'PRODUCT_UPDATE_FAIL':
        return { loading: false, error: action.payload }
      case 'PRODUCT_UPDATE_RESET':
        return { product: {} }
      default:
        return state
    }
  }

  export const vendorProductUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case 'VENDOR_PRODUCT_UPDATE_REQUEST':
        return { loading: true }
      case 'VENDOR_PRODUCT_UPDATE_SUCCESS':
        return { loading: false, success: true, product: action.payload }
      case 'VENDOR_PRODUCT_UPDATE_FAIL':
        return { loading: false, error: action.payload }
      case 'VENDOR_PRODUCT_UPDATE_RESET':
        return { product: {} }
      default:
        return state
    }
  }
  
  
export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_CREATE_REVIEW_REQUEST':
      return { loading: true }
    case 'PRODUCT_CREATE_REVIEW_SUCCESS':
      return { loading: false, success: true }
    case 'PRODUCT_CREATE_REVIEW_FAIL':
      return { loading: false, error: action.payload }
    case 'PRODUCT_CREATE_REVIEW_RESET':
      return {}
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_TOP_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_TOP_SUCCESS':
      return { loading: false, products: action.payload }
    case 'PRODUCT_TOP_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const vendorproductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_VENDOR_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_VENDOR_LIST_SUCCESS':
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case 'PRODUCT_VENDOR_LIST_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}