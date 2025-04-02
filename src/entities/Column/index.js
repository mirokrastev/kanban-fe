import Task from '../Task';
import styles from './styles.module.css';

const Column = ({ title, tasks }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <span style={{ fontSize: '14px' }}>{title}</span>
        <span className={styles.count}>{tasks.length}</span>
      </div>
      <div className={styles.content}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
