import React from "react";
import "./cadastro.css";
import Logo from "../../components/Logo/Logo";

const Cadastro: React.FC = () => {
  return (
    <div className="container">
      <Logo width="160px" />

      <form action="">
        <h1>Cadastre-se</h1>
        <input type="text" id="name" name="name" placeholder="Nome:" />
        <input type="email" name="email" id="email" placeholder="Email:" />
        <input type="tel" name="phone" id="phone" placeholder="Telefone:" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha:"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirme a Senha:"
        />
      </form>
    </div>
  );
};

export default Cadastro;
