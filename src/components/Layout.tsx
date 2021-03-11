import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactChild }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
