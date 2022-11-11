import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { useEffect } from "react";
import { show } from "../redux/reducers/toastReducer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loading, error, userInfo } = useSelector((state) => state.loginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo && userInfo.id) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (error) {
      dispatch(show("Proovi uuesti!"));
    }
  }, [error, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      userLogin({
        username: data.get("username"),
        password: data.get("password"),
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
                <img src={"/MINI_logo.svg"} alt="logo" height={60} />
                <h2 className="h4 mt-3">Logi sisse</h2>
              </div>
              <div className="card-body">
                <form action="#" className="" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputIcon3">Kasutaja</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-user"></span>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        id="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        type="text"
                        aria-label="username"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword6">Parool</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt"></span>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          aria-label="Password"
                          required
                        />
                      </div>
                    </div>
                    {/*<div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck5"
                        />{" "}
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck5"
                        >
                          Pea mind meeles
                        </label>
                      </div>
                      <div>
                        <a href="#" className="small text-right">
                          Unustasid jälle parooli?
                        </a>
                      </div>
                    </div>*/}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-primary"
                    disabled={loading}
                  >
                    Logi sisse
                  </button>
                </form>

                {/*<div className="d-none">
                  <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Not registered?{" "}
                      <a href="#" className="font-weight-bold">
                        Loo kasutaja
                      </a href="#">
                    </span>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
