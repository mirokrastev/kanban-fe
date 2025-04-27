import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Card = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/cards/${card.id}`)}>
      <div>{card.title}</div>
    </div>
  );
};

export default Card;
