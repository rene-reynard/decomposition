import React from "react";
import Widget from "./components/common/Widget/Widget";
import Banner from "./components/page/Banner/Banner";
import Services from "./components/page/Services/Services";
import Search from "./components/page/Search/Search";
import News from "./components/widgets/News/News";
import Stocks from "./components/widgets/Stocks/Stocks";
import Weather from "./components/widgets/Weather/Weather";
import SimpleListWidget from "./components/widgets/SimpleListWidget/SimpleListWidget";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import APP_DATA from "./app-data.json";


function App() {
  return (
    <div className="container container-md">
      <div className="row">
        <div className="col">
          <News />
          <Stocks />
        </div>
        <Banner url="#" className="col col-4 align-self-end">
          <img src="logo192.png" alt="Работа над ошибками" />
          <h3 style={{ color: "#0d6efd" }}>Работа над ошибками</h3>
          <p>Смотрите на Яндекс и запоминайте</p>
        </Banner>
      </div>
      <div className="row">
        <Services />
      </div>
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <Weather />
        <Widget url="#" title="Карта Германии">
          Расписания
        </Widget>
        {APP_DATA.map((item, index) => (
          <SimpleListWidget key={index} url="#" title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}

export default App;