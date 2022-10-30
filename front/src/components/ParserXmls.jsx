import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import XLSX from "xlsx";
import { fetchSendingXLSX, getData } from "../features/xlsxSlice";
import Graphic from "./Graphic";
import Users from "./Users";


const ParserXmls = () => {
  const [FileName, setFileName] = useState("Reload File");
  const [input, setinput] = useState();
  const [arr, setarr] = useState([1]);


  const dispatch = useDispatch();


  const handlerFile = async () => {
    setFileName(input.name);

    const data = await input.arrayBuffer();
    const workbook = XLSX.read(data);

    const workSheet = workbook.Sheets[workbook.SheetNames[0]];

    // массив со всей таблицей
    const jsonData = XLSX.utils.sheet_to_json(workSheet);


    const array = [];
    jsonData.map((el) => {
      array.push(Object.values(el));
    });

    await dispatch(fetchSendingXLSX(array));

    setarr(array)
    // dispatch(getData(array));
  };
  console.log(arr);


  return (
    <div className="parsel">
      <Link to="/landing">
        <button className="parsel-title">Главная</button>
      </Link>
      <h4 className="parsel-h1">Добавление нового пользователя</h4>
      

      <input
        className="parsel-reload"
        type="file"
        onChange={(e) => setinput(e.target.files[0])}
      />
      <button className="parsel-reload parsel-button" onClick={handlerFile}>
        Отправить
      </button>
    </div>
  );
};

export default ParserXmls;
