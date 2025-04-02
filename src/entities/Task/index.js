import styles from './styles.module.css';

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <div style={{ marginBottom: '10px' }}>{task.title}</div>
      <div className={styles.description}>{task.description}</div>
      <div className={styles.meta}>
        <span>Due: {task.dueDate}</span>
        <span>{task.assignee}</span>
      </div>
      <div className={styles.label}>{task.label}</div>
    </div>
  );
};

export default Task;
