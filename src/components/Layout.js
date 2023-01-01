import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return <div className='layoutt'>{children}</div>;
}

export default React.memo(Layout);
