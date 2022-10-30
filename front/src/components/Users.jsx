import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchXLSX } from "../features/xlsxSlice";
import Graphic from "./Graphic";
import { testerses } from "./index";

const Users = () => {
  const dispatch = useDispatch();

  const queryUsers = () => {
    dispatch(fetchXLSX());
  };


  let dateLabels;
  const dataArray = useSelector((state) => state.xlsx.date?.data?.testers);
  dataArray ? (dateLabels = dataArray) : (dateLabels = []);

  return (
    <div className="users">
      <button className="users-test" onClick={queryUsers}>
        Испытуемые
      </button>
      <Graphic dataArray={dateLabels} />
    </div>
  );
};

export default Users;
