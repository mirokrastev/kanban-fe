import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Task = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.task} onClick={() => navigate(`/cards/${task.id}`)}>
      <div>{task.name}</div>
    </div>
  );
};

export default Task;
