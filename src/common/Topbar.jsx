import React from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/" className="brand-chip" aria-label="Home">
          <span className="brand-mark">RT</span>
        </Link>
        <a href="mailto:rishabhtiwarics@gmail.com" className="handle-chip">
          rishabhtiwarics@gmail.com
        </a>
        <div className="available-chip">
          <span className="available-label">Freelance</span>
          <span className="available-status">
            <span className="status-dot">
              <span className="status-dot-core"></span>
            </span>
            Available
          </span>
        </div>
      </div>
      <div className="topbar-right">
        <span className="based-label">Based in</span>
        <span className="based-value">Rewa, Madhya Pradesh</span>
      </div>
    </header>
  );
}
