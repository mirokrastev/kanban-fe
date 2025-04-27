import { useState } from "react";
import { toast } from "react-toastify";

import { createCard } from "./sdk";

import styles from "./styles.module.css";

const CreateCard = ({ columnId, onSuccess }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createCard({
      title: cardTitle,
      column_id: columnId,
    });

    if (response.status === 201) {
      setIsInputVisible(false);
      setCardTitle("");
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
    <form onSubmit={handleSubmit} className={styles.createCardForm}>
      <input
        type="text"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Enter a title for this card..."
        className={styles.cardInput}
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
            setCardTitle("");
          }}
        >
          ×
        </button>
      </div>
    </form>
  );
};

export default CreateCard;
