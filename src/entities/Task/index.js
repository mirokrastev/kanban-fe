import styles from './styles.module.css';

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <div>{task.name}</div>
    </div>
  );
};

export default Task;
