import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import images from "./images/images";

function Cards() {
  return (
    <div className="padre cards">
      <div className="txt cards">
        <h2 className="none">Descubre lugares épicos de</h2>
        <h1> Ushuaia - Tierra del Fuego</h1>
        <h2>La ciudad más austral del Mundo!</h2>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={images[0]}
                text="Trekking recorriendo paisajes mágicos y la Laguna Esmeralda como meta "
                label="Aventura"
                path="/services"
              />
              <CardItem
                src={images[1]}
                text="Vista panoramica de la ciudad en un hotel 5 estrellas rodeado de montañas nevadas"
                label="Exclusivo"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={images[2]}
                text="Alucinantes colores en el parque natural más austral del mundo"
                label="Aventura"
                path="/services"
              />
              <CardItem
                src={images[3]}
                text="La mistica experiencia del tren del fin del mundo"
                label="Épico"
                path="/products"
              />
              <CardItem
                src={images[4]}
                text="Navegación por el canal Beagle hacia el faro del fin del mundo"
                label="Aventura"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
