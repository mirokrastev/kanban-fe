import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Dropdown, Input } from "semantic-ui-react";

import Card from "../Card";
import CreateCard from "../Card/CreateCard";
import DeleteColumn from "./DeleteColumn";

import { updateCardOrder, updateColumn } from "./sdk";
import { useBoard } from "../../contexts/BoardContext";

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

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.index !== destination.index) {
      const updatedCards = Array.from(column.cards);
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);

      await updateCardOrder(boardId, column.id, {
        ids: updatedCards.map((el) => el.id),
      });

      refetchColumns();
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
            <DeleteColumn column={column} onSuccess={refetchColumns} />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={column.id.toString()}>
          {(provided) => (
            <div
              className={styles.content}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {column.cards.map((card, index) => (
                <Draggable
                  key={card.id.toString()}
                  draggableId={card.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card card={card} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <CreateCard columnId={column.id} onSuccess={refetchColumns} />
    </div>
  );
};

export default Column;
