import { Header } from "semantic-ui-react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

import Column from "../Column";
import CreateColumn from "../Column/CreateColumn";
import { updateColumnOrder } from "./sdk";

import styles from "./styles.module.css";

const Board = ({ boardId, columns, columnsRefetch }) => {
  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.index !== destination.index) {
      const updatedColumns = Array.from(columns);
      const [movedColumn] = updatedColumns.splice(source.index, 1);
      updatedColumns.splice(destination.index, 0, movedColumn);

      await updateColumnOrder(boardId, {
        ids: updatedColumns.map((col) => col.id),
      });

      columnsRefetch();
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Header as="h1">Kanban Dashboard</Header>

      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided) => (
          <div
            className={styles.board}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columns.map((column, index) => (
              <Draggable
                key={column.id.toString()}
                draggableId={column.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Column column={column} refetchColumns={columnsRefetch} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <CreateColumn boardId={boardId} onSuccess={columnsRefetch} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
