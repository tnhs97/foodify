import React from "react";
import { SideBar } from "./SideBar";
import { Alert } from "./alert";
import { Header } from "./header";

const Layout = ({ children }) => {
  return (
    <div className="view-container">
      <Header />
      <div className="container">
        <Alert />
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
