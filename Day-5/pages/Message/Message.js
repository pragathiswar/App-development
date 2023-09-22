import React from "react";
import './Message.css'
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <Link to="/manageExpense"><button className="sidebar-button">Manage Expenses</button></Link>
        <Link to="/plan"><button className="sidebar-button">Plans</button></Link>
        <Link to="/"><button className="sidebar-button">Feed</button></Link>
      </div>
      <div className="dude_con">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Message;
