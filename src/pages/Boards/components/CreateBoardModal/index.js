import {useState} from "react";
import {toast} from "react-toastify";
import {Button, Modal} from "semantic-ui-react";

import { createBoard } from './sdk';

import {Form} from "semantic-ui-react";

const CreateBoardModal = ({ onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [boardName, setBoardName] = useState('');

  const handleSubmit = async () => {
    const response = await createBoard({ name: boardName});

    if (response.status === 201) {
      onSuccess();
      setModalOpen(false);
      setBoardName('');
    }
    else {
      const error = await response.json();
      toast.error(error);
    }
  }

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      size="mini"
      closeIcon
      trigger={
        <div
          onClick={() => setModalOpen(true)}
          style={{
            cursor: 'pointer',
            padding: '20px',
            border: '2px black dashed',
            textAlign: 'center',
          }}
        >
          Create a new Board
        </div>
      }
    >
      <Modal.Header>Create a New Board</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Board Name"
            placeholder="Enter board name..."
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        <Button
          primary
          onClick={(e, { closeModal }) => handleSubmit(closeModal)}
          disabled={!boardName.trim()}
        >
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateBoardModal;
