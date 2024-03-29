import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { SocialList, Form } from "./styles";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleContact(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header />
      <div className="box">
        <Container>
          <Row>
            <Col sm={12} lg={5}>
              <h2>Onde me encontrar</h2>
              <SocialList>
                <li>
                  <span>
                    <a href="https://wa.me/+5575982709757" target="_blank">
                      <FaWhatsapp size={20} /> <span>Whatsapp</span>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/joacymsilva/"
                      target="_blank"
                    >
                      <FaLinkedinIn size={16} /> <span>LinkedIn</span>
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="https://github.com/Joacy/" target="_blank">
                      <FaGithub size={16} /> <span>Github</span>
                    </a>
                  </span>
                </li>
              </SocialList>
            </Col>

            <Col sm={12} lg={7}>
              <h2>Faça um orçamento</h2>
              <Form onSubmit={handleContact}>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                  required
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Whatsapp"
                  required
                />

                <input
                  type="text"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  placeholder="Assunto"
                  required
                />

                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows="5"
                  placeholder="Mensagem"
                  required
                ></textarea>

                <button type="submit">Enviar</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
