import { useState } from "react";
import { toast } from "react-toastify";

import { createTask } from "./sdk";

import styles from "./styles.module.css";

const CreateTask = ({ columnId, onSuccess }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createTask({ title: taskTitle, column_id: columnId });

    if (response.status === 201) {
      setIsInputVisible(false);
      setTaskTitle("");
      onSuccess();
    } else {
      const error = await response.json();
      toast.error(error);
    }
  };

  if (!isInputVisible) {
    return (
      <button
        className={styles.addCardButton}
        onClick={() => setIsInputVisible(true)}
      >
        + Add a card
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.createTaskForm}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a title for this card..."
        className={styles.taskInput}
        autoFocus
      />
      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton}>
          Add card
        </button>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={() => {
            setIsInputVisible(false);
            setTaskTitle("");
          }}
        >
          ×
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
