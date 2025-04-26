import {Dropdown, Input} from "semantic-ui-react";

import Task from "../Task";
import CreateTask from "../Task/CreateTask";
import DeleteColumn from "./DeleteColumn";

import {useState} from "react";
import {updateColumn} from "./sdk";
import {useBoard} from "../../contexts/BoardContext";

import styles from "./styles.module.css";

const Column = ({ column, refetchColumns }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(column.title);

  const { boardId } = useBoard();

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSaveTitle = async () => {
    if (newTitle.trim() && newTitle !== column.title) {
      await updateColumn(boardId, column.id, { title: newTitle });
      refetchColumns();
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveTitle();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setNewTitle(column.title);
    }
  };

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        {isEditing ? (
          <Input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleSaveTitle}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            style={{ fontSize: "14px", cursor: "pointer" }}
            onClick={() => setIsEditing(true)}
          >
            {column.title}
          </span>
        )}
        <span className={styles.count}>{column.cards.length}</span>
        <Dropdown
          icon="ellipsis vertical"
          direction="left"
          pointing="top right"
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <DeleteColumn column={column} onSuccess={refetchColumns} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.content}>
        {column.cards.map((card) => (
          <Task key={card.id} task={card} />
        ))}
        <CreateTask
          columnId={column.id}
          onSuccess={refetchColumns}
        />
      </div>
    </div>
  );
};

export default Column;
