import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardPage = (props) => {
  const username = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar name={props.name} />
      <div className="flex flex-col justify-center items-center">
        {username ? (
          <h1 className="font-sans text-2xl mt-4 mb-4 text-blue-500">{`Welcome ${username}`}</h1>
        ) : (
          <h1 className="font-sans text-2xl mt-4 mb-4 text-blue-500">{`Welcome User`}</h1>
        )}
        <div>
          <Link to="/login">
            <button
              className="border bg-gray-400 text-center px-4 py-2 rounded-md hover:bg-gray-300"
              onClick={() => {
                  console.log("yes i am in")
                dispatch({ type: "me/username", payload: undefined });
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(DashboardPage);
