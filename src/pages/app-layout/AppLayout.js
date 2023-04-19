import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout(props) {
  return (
    <>
      <Header {...props} />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
