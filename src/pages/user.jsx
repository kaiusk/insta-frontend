import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../redux/actions/userActions";
import { useParams } from "react-router-dom";
import UserData from "../components/userData";


export default function UserPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { pUserInfo } = useSelector(state => state.postUser);

  useEffect(()=>{
    if (id) {
      dispatch(userProfile(id))
    }
  }, [id])

  return <div className={"col-12 my-5"}>
    <div className="card bg-primary border-light shadow-soft">
      <div className="card-header p-3">
        card header
      </div>
      <div className="card-body pt-2 d-flex">
    <UserData user={pUserInfo} profile={pUserInfo}></UserData>
      </div>
    </div>
  </div>;
}
