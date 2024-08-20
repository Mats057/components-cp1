import "./PlanoInfos.css";
import PropTypes from "prop-types";
import Seta from "../../assets/seta.png";

export const PlanoInfos = ({ titulo, quantidade, valor }) => {
  return (
    <label className="userBenefits">
      <h3>{titulo}</h3>
      <div className="infos-container">
        <span className="infos">{quantidade} <strong>R${valor }</strong></span>
        <img className="seta" src={Seta} />
      </div>
    </label>
  );
};

PlanoInfos.propTypes = {
  titulo: PropTypes.string.isRequired,
  quantidade: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
};
