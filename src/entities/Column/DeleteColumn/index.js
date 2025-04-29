import { useState } from "react";
import { Button, Icon, Modal, Dropdown } from "semantic-ui-react";
import { toast } from "react-toastify";

import { deleteColumn } from "./sdk";
import { useBoard } from "../../../contexts/BoardContext";

export const DeleteColumn = ({ column, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { boardId } = useBoard();

  const handleDelete = async () => {
    const response = await deleteColumn(boardId, column.id);

    if (!response.ok) {
      const error = await response.json();
      toast.error(error);
    } else {
      onSuccess();
    }
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      size="mini"
      closeIcon
      trigger={
        <Dropdown.Item onClick={() => setModalOpen(true)}>
          <div style={{ color: "red", cursor: "pointer" }}>Delete</div>
        </Dropdown.Item>
      }
    >
      <Modal.Header icon="trash" content="Delete Column?" />
      <Modal.Content>
        <p>
          Are you sure you want to delete this column? This action cannot be
          undone.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="grey" onClick={() => setModalOpen(false)}>
          <Icon name="cancel" /> Cancel
        </Button>

        <Button color="red" onClick={handleDelete}>
          <Icon name="trash" /> Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteColumn;
