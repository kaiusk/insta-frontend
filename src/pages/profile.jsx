import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

export default function Profile() {
  const { userInfo } = useSelector((state) => state.loginUser);
  const [bio, setBio] = useState(userInfo.bio);
  const [name, setName] = useState(userInfo.name);
  const [profileImageUrl, setProfileImageUrl] = useState(
    userInfo.profileImageUrl
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: userInfo.id,
        bio,
        name,
        profileImageUrl,
      })
    );
  };

  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 justify-content-center">
            <div className="card bg-primary shadow-soft border-light p-4">
              <div className="card-header text-center pb-0">
                <h2 className="h4 mt-3">Kasutaja profiil</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-2 mx-3">
                      <img
                        src={userInfo.profileImageUrl}
                        className="card-img-top rounded-circle"
                        alt={userInfo.name}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="img">Pilt</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-user"></span>
                        </span>
                      </div>
                      <input
                        type="url"
                        className="form-control"
                        id="img"
                        name="img"
                        value={profileImageUrl}
                        aria-label="img"
                        onChange={(e) => setProfileImageUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Nimi</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-user"></span>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        aria-label="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-user"></span>
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        id="bio"
                        name="bio"
                        value={bio}
                        aria-label="bio"
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary">
                      Tühista
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Salvesta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
