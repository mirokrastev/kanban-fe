import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Task = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.task} onClick={() => navigate(`/cards/${task.id}`)}>
      <div>{task.title}</div>
    </div>
  );
};

export default Task;
