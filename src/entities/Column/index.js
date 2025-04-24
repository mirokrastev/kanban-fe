import Task from "../Task";
import CreateTask from "../Task/CreateTask";

import styles from "./styles.module.css";

const Column = ({ columnId, title, tasks, refetchColumns }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <span style={{ fontSize: "14px" }}>{title}</span>
        <span className={styles.count}>{tasks.length}</span>
      </div>
      <div className={styles.content}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
        <CreateTask
          columnId={columnId}
          onSuccess={refetchColumns}
        />
      </div>
    </div>
  );
};

export default Column;
