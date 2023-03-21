import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "./loginform";

const ProtectedRoute = (props: any) => {
  const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login');
        }
    },[])
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
