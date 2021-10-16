import React from "react";
import { Link } from "react-router-dom";
import Breadcramps from "../../components/UI/Breadcramps/Breadcramps";
import Button from "../../components/UI/Button/Button";
import cl from "./main.module.css";

const MainPage = () => {
  return (
    <>
      <Breadcramps />
      <div className={cl.mainWrapper}>
        <p align="center" className={cl.mainText}>
          В команду, которая разработала Реакт-приложение, где вы сейчас
          находитесь, входит 5 человек. Каждый из нас очень любит Реакт,
          JavaScript и Фронтенд в целом. Мы очень старались, когда разрабатывали
          это приложение и надеемся оно вам понравится!
        </p>

        <Link to="/members">
          <Button className={cl.mainBtn}>
            <span>Познакомиться поближе &#128521; </span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
