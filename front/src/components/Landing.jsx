import React from "react";
import { Link } from "react-router-dom";

import artifical from "../images/Artificial intelligence_Isometric.svg";
import group from "../images/Group3.svg";
import menu from "../images/menu.svg";

const Landing = () => {
  return (
    <body>
      <section id="header"></section>
      <nav id="sideNav">
        <ul>
          <li>
            <a href="#header">ИСПЫТУЕМЫЕ</a>
          </li>
          <li>
            <a href="#about">ЗАРГРУЗИТЬ ДАННЫЕ</a>
          </li>
        </ul>
      </nav>
      <img src={group} id="menuBtn" alt="" />

      <section id="courses">
        <div class="container course-row">
          <div class="course-left-col">
            <div class="course-text">
              <h1>ИСКУСТВЕННЫЙ ИНТЕЛЛЕКТ</h1>
              <p class="courses-p">
                Здесь вы можете увидеть результаты пройденного пользователями
                тестирования по выявлению психологических отклонений.
              </p>
              <Link to="/">
                <button class="common-btn">Начать</button>
              </Link>
            </div>
          </div>
          <div class="course-right-col">
            <img src={artifical} alt="Курсы" />
          </div>
        </div>
      </section>
    </body>
  );
};

export default Landing;
