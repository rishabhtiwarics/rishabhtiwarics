import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section not-found">
      <span className="eyebrow">404</span>
      <h1 className="page-title">Page not found</h1>
      <p className="page-lead">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>
    </section>
  );
}
