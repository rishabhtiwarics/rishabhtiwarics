import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Topbar from "./Topbar";
import Footer from "./Footer";
import ScrollProgressIndicator from "./ScrollProgressIndicator";
import Icons from "./Icons";

export default function Layout() {
  return (
    <>
      <Icons />
      <ScrollProgressIndicator />
      <div className="shell">
        <div className="page">
          <div className="sidebar-wrap">
            <Sidebar />
            <MobileHeader />
          </div>

          <main className="main">
            <Topbar />
            
            <div id="app">
              <div className="page-view">
                <Outlet />
              </div>
            </div>

            <div className="divider"></div>
            
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
