import { useState } from "react";
import { Modal, Button, Form, Dropdown } from "semantic-ui-react";
import { toast } from "react-toastify";

import { updateBoard } from "./sdk";

const EditBoardModal = ({ board, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(board.title);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!newTitle.trim() || newTitle === board.title) {
      toast.error("Please provide a new valid title.");
      return;
    }

    setSaving(true);
    const response = await updateBoard(board.id, { title: newTitle });

    if (response.ok) {
      toast.success("Board updated successfully!");
      onSuccess();
      setModalOpen(false);
    } else {
      const error = await response.json();
      toast.error(error.message);
    }
    setSaving(false);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      size="mini"
      trigger={
        <Dropdown.Item onClick={() => setModalOpen(true)}>
          <div>Edit</div>
        </Dropdown.Item>
      }
    >
      <Modal.Header>Edit Board</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Board Name"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModalOpen(false)} disabled={saving}>
          Cancel
        </Button>
        <Button primary onClick={handleSave} loading={saving} disabled={saving}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditBoardModal;
