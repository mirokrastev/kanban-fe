import './styles.css';

const Task = ({ task }) => {
  return (
    <div className="task">
      <div style={{ marginBottom: '10px' }}>{task.title}</div>
      <div className="description">{task.description}</div>
      <div className="meta">
        <span>Due: {task.dueDate}</span>
        <span>{task.assignee}</span>
      </div>
      <div className="label">{task.label}</div>
    </div>
  );
};

export default Task;
