import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="card bg-primary shadow-soft border-light p-4 mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card-body text-center bg-primary py-5">
            <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
              <span className="fas fa-bug"></span>
            </div>
            <h2 className="h4 mr-2 my-4">Sellist lehte ei leitud :(</h2>
            <Link to={"/"} className="btn btn-primary mt-4">
              Tagasi algusesse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
