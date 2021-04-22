import React,{useState} from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import {Form,Button} from 'react-bootstrap'
import SearchBox from './SearchBox'

const Nav = ({history}) => {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      if (keyword.trim()) {
        history.push(`/search/${keyword}`)
      } else {
        history.push('/')
      }
    }


    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
  
    const logoutHandler = () => {
      dispatch(logout())
    }

  return (
    <div>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">Furniture Village</Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
           
            {/* <form onSubmit={submitHandler} className="desktop-item">
                <li>
            <input type='text'
             name='q'
             onChange={(e) => setKeyword(e.target.value)}
             placeholder='Search Products...'
              />
                </li>
                <li>
            <button type="submit"><i className="fa fa-search"></i></button>
                </li>
            </form> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Categories
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Categories
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                  <header>Furniture Manufacturers</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/">Residential Furniture</Link>
                      </li>
                      <li>
                        <Link to="/">Commercial Furniture</Link>
                      </li>
                      <li>
                        <Link to="/">Outdoor Furniture</Link>
                      </li>
                      <li>
                        <Link to="/">Bathroom Furniture</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Raw Material Suppliery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/">Saw Mills Wooden planks and sabs </Link>
                      </li>
                      <li>
                        <Link to="/">Brick Manufacturers</Link>
                      </li>
                      <li>
                        <Link to="/">Concrete mix ready Units</Link>
                      </li>
                      <li>
                        <Link to="/">Design Glass Manufacturers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Raw Material Suppliery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/">Saw Mills Wooden planks and sabs </Link>
                      </li>
                      <li>
                        <Link to="/">Brick Manufacturers</Link>
                      </li>
                      <li>
                        <Link to="/">Concrete mix ready Units</Link>
                      </li>
                      <li>
                        <Link to="/">Design Glass Manufacturers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Startionery and Marketting Material</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/">Banner and Visiting Card Printers</Link>
                      </li>
                      <li>
                        <Link to="/">Papper Suppliers</Link>
                      </li>
                      <li>
                        <Link to="/">Pen and pencil</Link>
                      </li>
                      <li>
                        <Link to="/">Gift and Trophy Manufatures</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
                {!userInfo ? 
              <Link to="/login">
                {" "}
                <i className="fas fa-user"></i> &nbsp;Login
              </Link> :     
        <>
          <a  className="desktop-item">{userInfo.name}</a>
          <input type="checkbox" id="showDrop" />
          <label for="showDrop" className="mobile-item">{userInfo.name}</label>
          <ul className="drop-menu">
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link onClick={logoutHandler}>Logout</Link></li>
          </ul>
        </>
                }

            </li>
        <li>
        {userInfo && userInfo.isAdmin && (
            <>
            <a  className="desktop-item">Admin</a>
            <input type="checkbox" id="showDrop" />
            <label for="showDrop" className="mobile-item">Admin</label>
            <ul className="drop-menu">
              <li><Link to='/admin/productlist'>Products</Link></li>
              <li><Link to='/admin/userlist'>Users</Link></li>
              <li><Link to='/admin/orderlist'>Orders</Link></li>
            </ul>
          </>
        )}
        </li>
        <li>
        {userInfo && userInfo.isVendor && (
            <>
            <a  className="desktop-item">Vendor</a>
            <input type="checkbox" id="showDrop" />
            <label for="showDrop" className="mobile-item">vendor</label>
            <ul className="drop-menu">
              <li><Link to={`${userInfo.name}/productlists/`}>Products</Link></li>
            </ul>
          </>
        )}
        </li>
            <li>
              <Link to="/cart">
                {" "}
                <i className="fas fa-shopping-cart "></i>
                <span className="badge badge-warning" id="lblCartCount">
                  {" "}
                  {cartItems.reduce((acc,item) => acc+item.qty,0)}
                </span>
              </Link>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Nav;