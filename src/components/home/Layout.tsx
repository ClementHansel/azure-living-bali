import React from "react";
import Header from "../header/Header";
import { Footer } from "../Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
