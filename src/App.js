import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Layout from "./components/Layout";
import SideBar from "./components/Side-bar";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Layout>
        <SideBar />
        <div className='container'>
          <Outlet />
        </div>
      </Layout>
    </Fragment>
  );
}

export default App;
