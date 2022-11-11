import React, { useState } from "react";
import { addPost } from "../redux/actions/postActions";
import { useDispatch } from "react-redux";
import { setVariant, show } from "../redux/reducers/toastReducer";

export default function AddPost() {
  const [fileInputs, setFileInputs] = useState([{ file: "" }]);
  const loading = false;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      addPost({
        location: data.get("locationName"),
        files: fileInputs,
      })
    );
    setVariant("success");
    show("Postitus lisatud!");
  };

  const handleChange = (i, e) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[i].file = e.target.value;
    setFileInputs(newFileInputs);
  };

  const addFileInput = () => {
    setFileInputs([...fileInputs, { file: "" }]);
  };

  let removeFileInput = (i) => {
    const newFileInputs = [...fileInputs];
    newFileInputs.splice(i, 1);
    setFileInputs(newFileInputs);
  };

  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 justify-content-center">
            <div className="card bg-primary shadow-soft border-light p-4">
              <div className="card-header text-center pb-0">
                <h2 className="h4 mt-3">Lisa postitus</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="locationName">Asukoht</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-globe"></span>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        id="locationName"
                        name="locationName"
                        autoComplete="locationName"
                        autoFocus
                        type="text"
                        aria-label="locationName"
                      />
                    </div>
                  </div>
                  {fileInputs.map((element, index) => (
                    <div className="form-group" key={index}>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-link"></span>
                          </span>
                        </div>
                        <input
                          placeholder="pildi url"
                          className="form-control"
                          name="fileUrl"
                          type="url"
                          aria-label="fileUrl"
                          value={element.file}
                          onChange={(e) => handleChange(index, e)}
                          required
                        />
                        {index ? (
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              onClick={() => removeFileInput()}
                            >
                              <span className="fas fa-trash"></span>
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                  <div className="w-full text-right">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addFileInput()}
                    >
                      Lisa fail
                    </button>
                  </div>
                  <hr />
                  <button
                    type="submit"
                    className="btn btn-block btn-primary"
                    disabled={loading}
                  >
                    Lisa
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
