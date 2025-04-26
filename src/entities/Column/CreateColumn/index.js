import { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { createColumn } from "./sdk";
import { toast } from "react-toastify";

const CreateColumn = ({ boardId, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [columnName, setColumnName] = useState("");

  const handleSubmit = async () => {
    const response = await createColumn(boardId, { title: columnName });

    if (response.status === 201) {
      setModalOpen(false);
      setColumnName("");
      onSuccess();
    } else {
      const error = await response.json();
      toast.error(error);
    }
  };

  return (
    <Modal
      open={modalOpen}
      size="mini"
      onClose={() => setModalOpen(false)}
      trigger={
        <div
          onClick={() => setModalOpen(true)}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "2px black dashed",
            textAlign: "center",
          }}
        >
          Create Column
        </div>
      }
    >
      <Modal.Header>Create Column</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Column Name"
            placeholder="Enter column name..."
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
        <Button primary onClick={handleSubmit}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateColumn;
