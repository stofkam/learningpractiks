import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp, logout, login } from "../store/userSlice";

const Navbar = () => {
  const email = useSelector((state) => state.user.currentEmail);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="navbar-link">
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          {!email ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="navbar-auth-link">
                Login
              </Link>
              <Link to="/auth" className="navbar-auth-link primary">
                Sign up
              </Link>
            </div>
          ) : (
            <div className="navbar-auth-links">
              <span>Hello, {email}</span>
              <button
                onClick={() => dispatch(logout())}
                className="navbar-auth-link"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
