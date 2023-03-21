import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  // login function
  const HandleLogin = () => {
    localStorage.setItem("login", "userLoggedIn");
    navigate("/");
    alert("user LoggedIn Successfully");
  };

  // logOut function
  const handleLogout = () => {
    localStorage.removeItem("login");
    alert("logOut Successfully");
    navigate("/login");
  };

  // styling 
  const buttonStyle = {
    marginLeft: "50%",
    border: "none",
    backgroundColor: "lightgreen",
    color: "white",
    padding: "10px",
  };
  
  return (
    <div>
      {localStorage.getItem("login") ? (
        <button onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      ) : (
        <button onClick={HandleLogin} style={buttonStyle}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginForm;
