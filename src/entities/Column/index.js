import Task from '../Task';
import './styles.css';

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <div className="header">
        <span style={{ fontSize: '14px' }}>{title}</span>
        <span className="count">{tasks.length}</span>
      </div>
      <div className="content">
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
