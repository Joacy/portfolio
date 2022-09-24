import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import front from "../../assets/img/front.svg";
import back from "../../assets/img/back.svg";
import smartphone from "../../assets/img/smartphone.svg";

import { ServicesList } from "./styles";

function Servicos() {
  return (
    <>
      <Header />
      <div className="box">
        <Container>
          <h2>Serviços</h2>

          <ServicesList>
            <li className="service">
              <img src={front} alt="Sites e Landing Pages" />
              <p className="title">Sites e Landing Pages</p>
              <p>
                Desenvolvo Sites e Landing Pages, utilizando HTML, CSS,
                JavaScript, Bootstrap, ReactJS
              </p>
            </li>

            <li className="service">
              <img src={back} alt="Sistemas Web" />
              <p className="title">Sistemas Web</p>
              <p>
                Desenvolvo Sistemas web, utilizando Nodejs, ReactJS, Mongodb,
                Sql
              </p>
            </li>

            <li className="service">
              <img src={smartphone} alt="Aplicativos" />
              <p className="title">Aplicativos</p>
              <p>
                Desenvolvo Aplicativos, para Android e iOS, com React Native
              </p>
            </li>
          </ServicesList>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Servicos;
