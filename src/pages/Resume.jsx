import React from "react";

export default function Resume() {
  return (
    <>
      <section className="section page-head">
        <div className="res-header-stage">
          <h1 className="res-header-title res-header-front" aria-label="My Resume.">
            <span className="res-header-q" aria-hidden="true">&quot;</span>
            <span className="res-header-box">My</span>
            <span>Resume</span>
            <span className="res-header-dot" aria-hidden="true">.</span>
          </h1>
          <div className="res-header-title res-header-ghost" aria-hidden="true">
            <span className="res-header-q">&quot;</span>
            <span className="res-header-box">My</span>
            <span>Resume</span>
            <span className="res-header-dot">.</span>
          </div>
        </div>
      </section>
    </>
  );
}

