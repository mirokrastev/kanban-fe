import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";

import { Page, LoadingPage } from "../../../components";
import { useFetchCardHook } from "../../../hooks";
import { useBoard } from "../../../contexts/BoardContext";
import { cardDelete } from "./sdk";

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { card, loading } = useFetchCardHook(id);
  const { boardId } = useBoard();

  const handleDelete = async () => {
    const response = await cardDelete(id);

    if (response.status === 204) {
      navigate(`/boards/${boardId}`);
      toast.success("Card deleted successfully");
    } else {
      const error = await response.json();
      toast.error(error);
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Page style={{ width: "25%" }}>
      <Header as="h1" style={{ wordWrap: "break-word" }}>
        {card.title}
      </Header>
      <Segment>
        <p>
          <strong>Description:</strong> {card.description || "N/A"}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button primary onClick={() => navigate(`/cards/${id}/edit`)}>
            Edit
          </Button>
          <Button negative onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Segment>
    </Page>
  );
};

export default CardDetail;
