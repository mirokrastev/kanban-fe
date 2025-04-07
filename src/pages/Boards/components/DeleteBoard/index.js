import {Button, Header, Icon, Modal} from "semantic-ui-react";
import {deleteBoard} from "./sdk";
import {toast} from "react-toastify";
import {useState} from "react";

const DeleteBoard = ({ board, onSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = async () => {
    const response = await deleteBoard(board.id);

    if (!response.ok) {
      const error = await response.json();
      toast.error(error);
    }
    else {
      onSuccess();
    }
  }

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      size="mini"
      closeIcon
      trigger={
        <Button color="red" size="mini" onClick={() => setModalOpen(true)}>
         x
        </Button>
      }
    >
      <Header icon="trash" content="Delete Board?" />
      <Modal.Content>
        <p>Are you sure you want to delete this board? This action cannot be undone.</p>
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
  )
}

export default DeleteBoard;
